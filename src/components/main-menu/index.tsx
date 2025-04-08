import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ContentTable from "../content-table";
import { Button } from "../ui/button";
import { Content } from "../../types/content/content";
import { getContent, postContent } from "../../services/content-service/content-service";
import DialogComponent from "../dialog";
import { Editor } from "../text-editor";
import './styles.scss';
import { DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { ChipInput } from "../chips";


const MainMenu = () => {
  const [data, setData] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("<h1> Title </h1>");


  useEffect(() => {
    getContent()
      .then((res) => {
        setData(res as Content[]); 
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const createContent = () => {
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }
  
    const content: Content = {
      body: editorValue,
      title: title,
      published: false,
      slug: title.split(' ').map(word => word.toLowerCase()).join('-'),
      tags: []
    };
  
    setLoading(true);
    postContent(content)
      .then((newContent) => {
        setData(content => content);
        setTitle("");
        setEditorValue("<h1>Title</h1>");
        setError(null);
      })
      .catch((err) => {
        setError(err.message || "Failed to create content");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle>Tsmurer Content Management</CardTitle>
        <CardDescription>Content control for the tsmurer blog</CardDescription>
      </CardHeader>
      <CardContent className="w-[700px] max-w-4xl">
        <div className="buttons-row">
        <DialogComponent
        trigger={<Button>Open Dialog</Button>}
        title={<>Create Content</>}
        description={<>Dialog Description</>}
        content={
          <>
            <Input type="text" placeholder="Title" maxLength={100} onChange={handleTitleChange}/>
            <ChipInput/>
            <Editor value={editorValue} onChange={setEditorValue} />
          </>
        }
        footer={
          <div className="footer-buttons">
            <DialogClose asChild><Button>Close</Button></DialogClose>
            <Button onClick={createContent}>Submit</Button>
          </div>
        }
      />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && <ContentTable data={data} />}
      </CardContent>
      <CardFooter className="flex justify-between">
        { 

        }
      </CardFooter>
    </Card>
  );
};

export default MainMenu;