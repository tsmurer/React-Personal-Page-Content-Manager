import MDEditor from '@uiw/react-md-editor';

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={(newValue) => {
          if (newValue !== undefined) {
            onChange(newValue);
          }
        }}
      />
    </div>
  );
};
