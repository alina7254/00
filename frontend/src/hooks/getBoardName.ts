export const getBoardName = (currentBoard: string | undefined): string => {
    switch (currentBoard) {
      case 'b':
        return 'Random';
      case 'd':
        return 'Dirt warehouse';
      case 'news':
        return 'News';
      case 'zog':
        return 'Conspiracy Theories';
      case 'vg':
        return 'Video Games';
      case 'mov':
        return 'Movies';
      case 'anime':
        return 'Anime';
      case 'cul':
        return 'Culture';
      case 'ne':
        return 'Animals and Nature';
      case 'em':
        return 'Other Countries';
      case 'sex':
        return 'Sex and Relationships';
      case 'psy':
        return 'Psychology';
      case 'sci':
        return 'Science';
      case 'hw':
        return 'Hardware and Technology';
      case 'ai':
        return 'Artificial intelligence';
      case 'un':
        return 'Education';
      default:
        return 'BOARD';
    }
  };


  