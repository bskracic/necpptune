import React, { useState } from "react";
import AceEditor from "react-ace";
import "react-dropdown/style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ZoomIn, ZoomOut, CaretRightFill } from "react-bootstrap-icons";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sqlserver";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";

export default function CodeEditor(props) {
  

  const themes = [
    {
      name: "Light",
      value: "textmate",
    },
    {
      name: "Dark",
      value: "monokai",
    },
  ];

  const [mainFileText, setMainFileText] = useState("source code");
  const [zoom, setZoom] = useState(1);
  const [theme, setTheme] = useState(themes[0]);

  const submit = () => {
    const payload = JSON.stringify({
      main_file_text: mainFileText,
      language_id: 12,
      exec_config: {
        compiler_opt: "",
        time_limit: 0,
        memory_limi: 0,
        stdin: props.stdin
      },
    });

    const submissionHeaders = new Headers();
    submissionHeaders.append("Content-Type", "application/json");
    // var requestOptions = {
    //   method: "POST",
    //   headers: submissionHeaders,
    //   body: payload,
    //   redirect: "follow",
    // };
    // 3.65.33.203:8080
    // fetch("https://test18.skracic.net/api/public/exec", requestOptions)
    //   .then((res) => res.json())
    //   .then((response) => {
    //     props.onSubmissionSent(response.exec_entry.id);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <AceEditor
        name="main_file_text"
        mode="c_cpp"
        theme={theme.value}
        value={mainFileText}
        width="100%"
        height="80vh"
        style={{ fontSize: zoom * 15 }}
        showPrintMargin={false}
        // enableLiveAutocompletion={true}
        // enableBasicAutocompletion={true}
        onChange={(change) => {
          setMainFileText(change);
        }}
        editorProps={{ $blockScrolling: true }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
        <div style={{ dislpay: "flex" }}>
          <ZoomOut
            onClick={() => {
              setZoom(zoom - 0.125);
            }}
          />
          <label>{zoom * 100}%</label>
          <ZoomIn
            onClick={() => {
              setZoom(zoom + 0.125);
            }}
          />
        </div>
        <Form.Check
          type="switch"
          label={`${theme.name} theme`}
          onChange={(event) => {
            if (event.target.checked) setTheme(themes[1]);
            else setTheme(themes[0]);
          }}
        />
        <div style={{ display: "flex" }}>
          <Button
            variant="success"
            onClick={submit}
            style={{display: 'flex', alignItems: 'center'}}
          >
            Run <CaretRightFill />
          </Button>
        </div>
      </div>
      
    </div>
  );
}