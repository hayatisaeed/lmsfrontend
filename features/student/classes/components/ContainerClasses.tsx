"use client";

//ui
import { Container } from "@/shared/ui";

//card
import Card from "./Card";

//component
import { Pagination } from "@/shared/components";

//filter
import FilterCategory from "./FilterCategory";

//api
import { useGetCourses } from "@/services/tanstack/student/classes/queries";

export default function ContainerClasses() {
  const {
    data: courses,
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
  } = useGetCourses();

  if (isLoadingCourses || isErrorCourses)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorCourses ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "در حال بارگذاری ..."
        )}
      </div>
    );

  return (
    <div className="w-full min-h-full grid grid-cols-1 gap-5">
      {/* <div className="flex md:flex-col gap-5">
        <Container title="دسته بندی ها">
          <FilterCategory
            filters={[
              { id: 1, label: "دسته بنددی ها" },
              { id: 2, label: "همه دسته بندی" },
              { id: 3, label: "ادبیات فارسی" },
              { id: 4, label: "ریاضی" },
            ]}
          />
        </Container>
      </div> */}
      <Container title="لیست دوره ها" className="justify-start">
        <div className="w-full flex flex-col items-center gap-7">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
            {courses?.map((course) => (
              <Card
                key={course.id}
                id={course.id}
                image={course.index_image}
                name={course.name}
                is_joined={course.is_joined}
              />
            ))}
          </div>
          {/* <Pagination total={150} /> */}
        </div>
      </Container>
    </div>
  );
}
