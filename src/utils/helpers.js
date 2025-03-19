export const isUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
};
  
export const isFileUrl = (value) => {
    if (value.includes('naacportalbucket')) {
        return true
    }
    return false
}

export const stripHtmlTags = (content) => {
  return content.replace(/<\/?[^>]+(>|$)/g, ""); 
};