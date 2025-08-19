//modal
import { Modal } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";

//modal
import Tests from "../modal/Tests";

interface ICardProps {
  name?: string;

  id: string;
}

export default function Card({ name, id }: ICardProps) {
  return (
    <>
      <Modal.Open id={id}>
        <Button type="button" className="!bg-box-primary">
          <div className="w-full h-full !bg-box-primary !rounded-2xl !p-3 !flex !flex-col !gap-4 !text-text-primary">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center justify-center gap-2">
                <h3>{name}</h3>
              </div>
            </div>
            {/* <div className="flex gap-2 flex-wrap mb-3">
              {tags?.map((tag, index) => (
                <h3
                  key={index}
                  className="bg-white-primary py-1 px-2 rounded-md text-[13px]"
                >
                  #{tag}
                </h3>
              ))}
            </div> */}
          </div>
        </Button>
      </Modal.Open>
      <Modal.Window id={id}>
        <Tests id={id} />
      </Modal.Window>
    </>
  );
}
