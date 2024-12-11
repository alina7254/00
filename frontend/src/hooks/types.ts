export interface BtnCreateProps {
    createThread: (currentBoard: string, title: string, content: string, blob: File | null) => void;
  }

export interface BtnReplyProps {
    addNewPost: (content: string, blob: File | null, replyTo?: number) => void;
    replyTo?: number;
  }

export interface BtnSendProps {
    onSend: () => void;
}

export interface PostProps {
    id: number;
    content?: string | null;
    author?: string | null;
    timestamp: string;
    op?: boolean;
    postNumber: number,
    title?: string | null;
    blob?: string | null;
    board: string;
    replyTo?: number;
}

export interface SidebarProps {
    isOpen: boolean;
}

export interface ImageUploaderProps {
    blob: File | null;
    setImage: (blob: File | null) => void;
}

export interface FlagIconProps {
    countryCode: string;
}

export interface NavbarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export interface TextFormattingButtonsProps {
    textareaId: string;
    doAddTags: (startTag: string, endTag: string, textareaId: string) => void;
    handleSpoiler: () => void;
}

  
export interface Thread {
      id: number;
      currentBoard: string;
      title: string;
      blob?: string | null;
      posts: PostProps[];
      time: string;
      totalPosts: number; 
      totalImages: number;
}


export interface Language {
    key: string;
    name: string;
}





