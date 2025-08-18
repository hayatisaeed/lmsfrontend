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

//key
import { getStudentEducationKey } from "@/services/tanstack/student/profile/key";

//api
import {
  usePostLocation,
  usePostStudentParent,
} from "@/services/tanstack/student/profile/mutation";
import {
  useGetEducationalLevels,
  useGetOlympiads,
  useGetStudyBranches,
} from "@/services/tanstack/student/profile/queries";

//types
import { TStudentEducation } from "@/services/tanstack/student/profile/types";

//react-query
import { useQueryClient } from "@tanstack/react-query";

//toast
import toast from "react-hot-toast";

interface IEducationProps {
  data?: TStudentEducation;
}

export default function Education({ data }: IEducationProps) {
  const { data: olympiads, isLoading: isLoadingOlympiads } = useGetOlympiads();
  const { data: educationalLevels, isLoading: isLoadingEducationalLevels } =
    useGetEducationalLevels();
  const { data: studyBranches, isLoading: isLoadingStudyBranches } =
    useGetStudyBranches();

  const { mutate: postStudentParent, isPending: isSubmittingParentPhone } =
    usePostStudentParent();
  const { mutate: postLocation, isPending: isSubmittingLocation } =
    usePostLocation();

  const queryClient = useQueryClient();

  function showToast(success: boolean, onClose?: () => void) {
    if (success) {
      toast.success("اطلاعات شما با موفقیت ثبت شد.");
      queryClient.invalidateQueries({ queryKey: getStudentEducationKey() });
      onClose?.();
    } else {
      toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
    }
  }

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
      { province: data.province, city: data.city },
      {
        onSuccess: () => showToast(true, onClose),
        onError: () => showToast(false),
      }
    );
  };

  const mutateStudentParent = (phone: string, onClose?: () => void) => {
    postStudentParent(phone, {
      onSuccess: () => showToast(true, onClose),
      onError: () => showToast(false),
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
      <PersonalItemCity
        value=""
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
      />

      <EducationItem
        isList
        id="study"
        labelModal="رشته تحصیلی خود را وارد کنید"
        label="رشته تحصیلی"
        icon={<NotebookMinimalistic size="SM" />}
        data={studyBranches}
        isPending={isLoadingStudyBranches}
      />

      <EducationItem
        id="school-name"
        value=""
        labelModal="نام مدرسه خود را وارد کنید"
        label="نام مدرسه"
        icon={<Buildings size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="school-type"
        value=""
        labelModal="نوع مدرسه خود را وارد کنید"
        label="نوع مدرسه"
        icon={<Bookmark size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="parents-phone"
        value=""
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
      />
    </div>
  );
}
