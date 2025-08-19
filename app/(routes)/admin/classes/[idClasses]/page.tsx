import ContainerClassesID from "@/features/admin/idClasses/components/ContainerClassesID";

interface IIdClassesProps {
  params: Promise<{ idClasses: string }>;
}

export default async function IdClasses({ params }: IIdClassesProps) {
  const { idClasses: id } = await params;

  return <ContainerClassesID id={id} />;
}
