import { FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/* State */
import { useRecoilState } from "recoil";
import { eventInputState } from "stores";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      {
        color: [
          "#000000",
          "#e60000",
          "#ff9900",
          "#ffff00",
          "#008a00",
          "#0066cc",
          "#9933ff",
          "#ffffff",
          "#facccc",
          "#ffebcc",
          "#ffffcc",
          "#cce8cc",
          "#cce0f5",
          "#ebd6ff",
          "#bbbbbb",
          "#f06666",
          "#ffc266",
          "#ffff66",
          "#66b966",
          "#66a3e0",
          "#c285ff",
          "#888888",
          "#a10000",
          "#b26b00",
          "#b2b200",
          "#006100",
          "#0047b2",
          "#6b24b2",
          "#444444",
          "#5c0000",
          "#663d00",
          "#666600",
          "#003700",
          "#002966",
          "#3d1466",
        ],
      },
      { background: [] },
    ],
    ["link", "image"],
  ],
};

const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
];

export const Editor: FC = () => {
  const [eventContent, setEventContent] = useRecoilState(eventInputState);

  return (
    <div className="pb-4">
      <label className="form-label required px-2">Event Content</label>
      <ReactQuill
        modules={modules}
        formats={formats}
        placeholder="Example Content"
        theme="snow"
        value={eventContent.content}
        onChange={(content, delta, source, editor) =>
          setEventContent({
            ...eventContent,
            content: editor.getHTML(),
          })
        }
      />
    </div>
  );
};
