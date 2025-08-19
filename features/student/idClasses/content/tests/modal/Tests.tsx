import { Button } from "@/shared/ui";

interface ITestsProps {
  id: string;
  onClose?: () => void;
}

export default function Tests({ id, onClose }: ITestsProps) {
  return (
    <div>
      {id}
      <Button
        type="button"
        onClick={() => {
          onClose?.();
        }}
      >
        fssjk
      </Button>
    </div>
  );
}
