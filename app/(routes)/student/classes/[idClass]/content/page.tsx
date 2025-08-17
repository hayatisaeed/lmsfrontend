interface IPageProps {
  params: { idClass: string };
}

export default async function page({ params }: IPageProps) {
  const { idClass } = params;

  // گرفتن اطلاعات دوره از سرور

  return (
    <div>
      <h1>{idClass}</h1>
      <p>ثبت نام کرده</p>
      {/* سایر اطلاعات دوره */}
    </div>
  );
}
