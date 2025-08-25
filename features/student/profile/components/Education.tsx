"use client";

//icons
import {
  Book,
  Bookmark,
  Buildings,
  Notebook,
  NotebookMinimalistic,
  Smartphone,
} from "@/assets/icons";

//components
import {
  EducationItem,
  PersonalItemCity,
} from "@/features/student/profile/components";
import { getStudentProfileKey } from "@/services/tanstack/student/profile/key";

//api
import {
  usePostLocation,
  usePostStudentParent,
  usePutStudentEducation,
} from "@/services/tanstack/student/profile/mutation";
import {
  useGetEducationalLevels,
  useGetOlympiads,
  useGetScrollType,
  useGetStudyBranches,
} from "@/services/tanstack/student/profile/queries";
import {
  Teducation,
  TLocationProfile,
} from "@/services/tanstack/student/profile/types";

//types

//react-query
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

//toast
import toast from "react-hot-toast";

interface IEducationProps {
  data?: Teducation;
  location?: TLocationProfile;
}

export default function Education({ data, location }: IEducationProps) {
  const [idEducationalLevels, setIdEducationalLevels] = useState<string>("");

  //get olympiads
  const { data: olympiads, isLoading: isLoadingOlympiads } = useGetOlympiads();

  //get EducationalLevels
  const { data: educationalLevels, isLoading: isLoadingEducationalLevels } =
    useGetEducationalLevels();

  //get scroll type
  const { data: scrollType, isLoading: isLoadingScrollType } =
    useGetScrollType();

  //get studyBranches
  const { data: studyBranches, isLoading: isLoadingStudyBranches } =
    useGetStudyBranches(idEducationalLevels);

  //mutate parent
  const { mutate: postStudentParent, isPending: isSubmittingParentPhone } =
    usePostStudentParent();

  //mutate location
  const { mutate: postLocation, isPending: isSubmittingLocation } =
    usePostLocation();

  //mutate education
  const { mutate: postEducation, isPending: isPendingPostEducation } =
    usePutStudentEducation();

  const queryClient = useQueryClient();

  function showToast(success: boolean, onClose?: () => void) {
    if (success) {
      toast.success("اطلاعات شما با موفقیت ثبت شد.");
      onClose?.();
    } else {
      toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
    }
  }

  //fn mutate location
  const mutateLocation = (
    data: {
      idProvince: number;
      province: string;
      idCity: number;
      city: string;
    },
    onClose?: () => void
  ) => {
    postLocation(
      {
        province: data.province,
        city: data.city,
        province_id: data.idProvince,
        city_id: data.idCity,
      },
      {
        onSuccess: () => {
          showToast(true, onClose);
          queryClient.invalidateQueries({ queryKey: getStudentProfileKey() });
        },
        onError: () => showToast(false),
      }
    );
  };

  //fn mutate parent
  const mutateStudentParent = (phone: string, onClose?: () => void) => {
    postStudentParent(phone, {
      onSuccess: () => {
        showToast(true, onClose);
      },
      onError: () => showToast(false),
    });
  };

  //fn mutate education levels
  function mutateEducationLevels(
    id: string | number,
    _: string,
    onClose?: () => void
  ) {
    postEducation(
      { level: Number(id) },
      {
        onSuccess: () => {
          setIdEducationalLevels(String(id));
          showToast(true, onClose);
        },
        onError: () => {
          showToast(false);
        },
      }
    );
  }

  //fn mutate olympiad
  function mutateEducationOlympiad(
    olympiad_ids: number | string,
    _: string,
    onClose?: () => void
  ) {
    postEducation(
      { olympiad_ids: [+olympiad_ids] },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => showToast(false),
      }
    );
  }

  function mutateEducationSchoolType(
    school_type: number | string,
    scholl_name: string,
    onClose?: () => void
  ) {
    postEducation(
      { school_type: scholl_name },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => showToast(false),
      }
    );
  }

  function mutateEducationSchoolName(
    school_name: string | number,
    onClose?: () => void
  ) {
    postEducation(
      { school_name: String(school_name) },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => showToast(false),
      }
    );
  }

  function mutateEducationStudyBranch(
    study_branch: number | string,
    _: string,
    onClose?: () => void
  ) {
    postEducation(
      { study_branch: +study_branch },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => showToast(false),
      }
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
      <PersonalItemCity
        province={location?.province}
        city={location?.city}
        mutate={mutateLocation}
        isLoading={isSubmittingLocation}
      />

      <EducationItem
        isList
        id="degree"
        labelModal="مقطع تحصیلی خود را وارد کنید"
        label="مقطع تحصیلی"
        icon={<Book size="SM" />}
        data={educationalLevels}
        isPending={isLoadingEducationalLevels}
        mutate={mutateEducationLevels}
      />

      <EducationItem
        isList
        id="study"
        labelModal="رشته تحصیلی خود را وارد کنید"
        label="رشته تحصیلی"
        icon={<NotebookMinimalistic size="SM" />}
        data={studyBranches}
        isPending={isLoadingStudyBranches}
        mutate={mutateEducationStudyBranch}
      />

      <EducationItem
        id="school-name"
        value=""
        labelModal="نام مدرسه خود را وارد کنید"
        label="نام مدرسه"
        icon={<Buildings size="SM" />}
        sendCode={false}
        mutate={mutateEducationSchoolName}
      />

      <EducationItem
        isList
        data={scrollType}
        isPending={isLoadingScrollType}
        id="school-type"
        labelModal="نوع مدرسه خود را وارد کنید"
        label="نوع مدرسه"
        icon={<Bookmark size="SM" />}
        mutate={mutateEducationSchoolType}
      />

      <EducationItem
        id="parents-phone"
        value="1"
        icon={<Smartphone size="SM" />}
        labelModal="شماره تماس اولیا خود را وارد کنید"
        label="شماره موبایل اولیا"
        sendCode={false}
        mutate={mutateStudentParent}
        isPending={isSubmittingParentPhone}
        isNum
        error="شماره تماس "
        pattern={/^0?9\d{9}$/}
      />

      <EducationItem
        isList={true}
        data={olympiads}
        id="olmpiads"
        labelModal="المپیاد مدنظر خود را انتخاب کنید"
        label="المپیاد مدنظر"
        icon={<Notebook size="SM" />}
        isPending={isLoadingOlympiads}
        mutate={mutateEducationOlympiad}
      />
    </div>
  );
}
