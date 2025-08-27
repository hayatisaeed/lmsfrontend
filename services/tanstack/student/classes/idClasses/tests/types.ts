export type TClassesTests = {
  exam_id: number;
  course_id: number;
  title: string;
  start_at: string;
  end_at: string;
  started: boolean;
  attempt_status: "in_progress";
  expires_at: string;
  duration: number;
  attempt_id?: string;
};

export interface IQuestion {
  id: string;
  type: "TEXT_OR_FILE" | string;
  title: string;
  body_richtext: string;
  order_index: number;
  is_required: boolean;
  options: any[];
  assets: any[];
}

export interface IExamSession {
  id: string;
  exam: string;
  course: string;
  status: "in_progress" | "completed" | "pending";
  started_at: string;
  expires_at: string;
  remaining_seconds: number;
  questions: IQuestion[];
}
