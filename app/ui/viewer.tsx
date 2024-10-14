"use client";
import { useEffect } from "react";
import { Stage } from "ngl";

export default function NglViewer({ pdbUrl, persp }: { pdbUrl: string; persp: string }) {
  useEffect(() => {
    const stage = new Stage("viewport", {
      backgroundColor: "#F1FCEB",
    });

    stage
      .loadFile(pdbUrl)
      .then(function (component) {
        component.removeAllRepresentations();
        component.addRepresentation(persp);
        component.autoView();
        // console.log(component.structure.atomCount);
      });

    return () => {
      // delete const stage
      stage;
    };
  }, [pdbUrl, persp]);

  return <div id="viewport" style={{ width: "610px", height: "541px" }} />
}
