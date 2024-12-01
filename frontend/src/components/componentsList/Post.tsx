import { useNavigate, useParams } from 'react-router-dom';
import { PostProps } from "../../hooks/types";
import { FaRegComment } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import BtnReply from './BtnReply';

interface PostComponentProps extends PostProps {
  addNewPost: (content: string, blob: File | null, replyTo?: number) => void;
  totalPosts?: number;
  totalImages?: number; 
}

const Post: React.FC<PostComponentProps> = ({
  id,
  content,
  timestamp,
  author,
  op,
  title,
  blob,
  replyTo,
  postNumber,
  addNewPost,
  totalPosts,
  totalImages,
}) => {
  const navigate = useNavigate();
  const { id: currentThreadId } = useParams<{ id: string }>();

  const handleClick = () => {
    if (String(id) !== currentThreadId) {
      navigate(`${id}`);
    }
  };

  const formatText = (text: string): string => {
    return text
      .replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>')
      .replace(/\[i\](.*?)\[\/i\]/g, '<em>$1</em>')
      .replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>')
      .replace(/\[s\](.*?)\[\/s\]/g, '<del>$1</del>')
      .replace(/\[sup\](.*?)\[\/sup\]/g, '<sup>$1</sup>')
      .replace(/\[sub\](.*?)\[\/sub\]/g, '<sub>$1</sub>')
      .replace(/\[quote\](.*?)\[\/quote\]/g, '<blockquote>$1</blockquote>');
  };

  return (
    <div className="searchable flex flex-col content-start p-2 w-screen items-center">
      <div key={id} className="chat chat-bubble w-full bg-base-200 bg-clip-border rounded-md shadow-md">
        <div className="chat-header text-sm p-2 flex flex-row justify-normal gap-1 text-md">
          <p className="font-bold text-secondary uppercase">{author}</p>
          <span className="uppercase font-normal text-base-content">{timestamp}</span>
          <span className="text-primary font-medium mb-1">№{id}</span>
          {op && <span className="uppercase text-accent font-bold">OP</span>}
          {!op && <span className="uppercase text-accent font-bold">{postNumber}</span>}
          <div>
            <BtnReply addNewPost={addNewPost} replyTo={id}></BtnReply>
          </div>
        </div>
        <div className="flex flex-row">
          {blob && (
            <img src={blob} alt="pic" className="flex w-1/4 h-1/4 p-2" />
          )}
          <span className="flex flex-col p-2 gap-2">
          {replyTo && (
              <p className="font-bold text-primary text-md">
               {">>"}{replyTo}{op ? "(OP)" : ""}
              </p>
            )} 
            {op && title && (
              <button
                onClick={handleClick}
                type="button"
                className="font-bold tracking-wide text-primary text-2xl text-start"
                disabled={String(id) === currentThreadId}
              >
                {title}
              </button>
            )}
            {content && (
              <article
                className="text-secondary text-md"
                dangerouslySetInnerHTML={{ __html: formatText(content) }}
              />
            )}

            <div className='flex flex-row gap-3'>
              {op && totalPosts !== undefined && (
                <button className="flex flex-row gap-1 text-accent font-bold">
                  <FaRegComment onClick={handleClick} className='mt-1'/> {totalPosts} 
                </button>
              )}
              {op && totalImages !== undefined && (
                <p className="flex flex-row gap-1 text-accent font-bold">
                  <FaImages className='mt-1' /> {totalImages} 
                </p>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;









