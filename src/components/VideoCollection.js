import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

export default function VideoCollection(props) {
  return (
    <ResponsiveEmbed aspectRatio="16by9" className="bg-light shadow mb-4" id={props.id}>
      <iframe
        src="https://www.youtube.com/embed/J7rlk2RLMQc"
        frameBorder="0"
        allowFullScreen="allowFullScreen"
      />
    </ResponsiveEmbed>
  );
}
