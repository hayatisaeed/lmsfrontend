import ContainerClassesID from "@/features/admin/idClasses/components/ContainerClassesID";

// export function generatorMetadata({ params }) {
//     r
// }

interface IIdClassesProps {
  params: { idClasses: string };
}

export default function IdClasses({ params }: IIdClassesProps) {
  const { idClasses: id } = params;

  return <ContainerClassesID id={id} />;
}
