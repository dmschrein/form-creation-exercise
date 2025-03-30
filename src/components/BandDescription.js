import DOMPurify from "dompurify";

function BandDescription({ description }) {
  const sanitizedHTML = DOMPurify.sanitize(description);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
}

export default BandDescription;
