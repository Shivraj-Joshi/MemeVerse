import React, { useState, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { storage } from "../appwriteConfig";

import { Link, Navigate } from "react-router-dom";

function CreateMemes() {
  const [memes, setMemes] = useState({
    title: "",
    category: "",
    content: "",
  });

  //   add post function
  const addPost = async () => {
    if (
      memes.title === "" ||
      memes.category === "" ||
      memes.content === "" ||
      !thumbnail
    ) {
      return alert("all fields are compulsory");
    }
    const imageUrl = await uploadeImage();
    if (!imageUrl) {
      return alert("Image upload failed");
    }
    setMemes({ ...memes, thumbnail: imageUrl });
    console.log("post created with image:", imageUrl);
  };

  //uploade image function

  const uploadeImage = async () => {
    if (!thumbnail) {
      console.log("no file selected");
      return;
    }

    try {
      const response = await storage.createFile(
        "67d2cfd2000120010cc5",
        ID.unique(),
        thumbnail
      );
      const fileId = response.$id;
      return `https://cloud.appwrite.io/v1/storage/buckets/67d2cfd2000120010cc5/files/${fileId}/view?project=YOUR_PROJECT_ID`;
    } catch (error) {
      console.log(error);
    }
  };

  const [thumbnail, setthumbnail] = useState();

  const [text, setText] = useState("");
  console.log("Value: ");
  console.log("text: ", text);

  // Create markup function
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className=" container mx-auto max-w-5xl py-6 bg-slate-500">
      <div className="p-5">
        {/* Top Item  */}
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            {/* Dashboard Link  */}
            <Link to={"/userdashboard"}>
              <button className="bg-sky-600 text-white p-2 rounded-xl cursor-pointer hover:scale-90">
                go back
              </button>
            </Link>

            {/* Text  */}
            <h3 className="text-white">Create meme </h3>
          </div>
        </div>

        {/* main Content  */}
        <div className="mb-3 text-white">
          {/* Thumbnail  */}
          {thumbnail && (
            <img
              className=" w-full rounded-md mb-3 "
              src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
              alt="thumbnail"
            />
          )}

          {/* Text  */}
          <p>Upload meme thumbnail</p>

          {/* First Thumbnail Input  */}
          <input
            type="file"
            label="Upload thumbnail"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setthumbnail(e.target.files[0]);
              }
            }}
            placeholder="choose file"
          />
        </div>

        {/* Second Title Input */}
        <div className="mb-3">
          <input
            label="Enter your Title"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none "
            placeholder="Enter Your Title"
            name="title"
            onChange={(e) => setMemes({ ...memes, title: e.target.value })}
            value={memes.title}
          />
        </div>

        {/* Third Category Input  */}
        <div className="mb-3">
          <input
            label="Enter your Category"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none"
            placeholder="Enter Your Category"
            name="category"
            onChange={(e) => setMemes({ ...memes, category: e.target.value })}
            value={memes.category}
          />
        </div>

        {/* Four Editor  */}
        <Editor
          apiKey="9gh8n56xurfxmdpw636hadwlfkx4xu63qezvtocmvexdjs1q"
          onEditorChange={(newValue, editor) => {
            setMemes({ memes, content: newValue });
            setText(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            setText(editor.getContent({ format: "text" }));
          }}
          init={{
            plugins:
              "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
          }}
        />

        {/* Five Submit Button  */}
        <button
          onClick={addPost}
          className=" w-full mt-5 bg-sky-400 text-white p-2 rounded-xl font-bold cursor-pointer"
        >
          Send
        </button>

        {/* Six Preview Section  */}
        <div className="">
          <h1 className=" text-center mb-3 text-2xl text-white">Preview</h1>
          <div className="content">
            <div
              className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                       

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                       

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                       

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                       

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        

                        [&>p]:text-[16px] [&>p]:mb-1.5
                       

                        [&>ul]:list-disc [&>ul]:mb-2
                        
                        [&>ol]:list-decimal [&>li]:mb-10
                       

                        [&>li]:list-decimal [&>ol]:mb-2
                       

                        [&>img]:rounded-lg
                        `}
              dangerouslySetInnerHTML={createMarkup(memes.content)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMemes;
