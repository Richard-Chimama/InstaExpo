
function formatTimestamp(time:Date) {
      const date = new Date(time);
      const now = new Date();
    
      const diffInTime = now.getTime() - date.getTime();
      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
      const diffInWeeks = Math.floor(diffInTime / (1000 * 3600 * 24 * 7));
    
      // If the date is from today, show the time
      if (diffInDays === 0) {
        return date.toLocaleTimeString();
      }
      // If the date is from the last 7 days, show the days
      else if (diffInDays < 7) {
        if(diffInDays < 2){
          return diffInDays + ' day ago'
        }else{
          return diffInDays + ' days ago';
        }
      }
      // If the date is older, show the weeks
      else {
        if(diffInWeeks < 2){
          return diffInWeeks + ' week ago'
        }else{
          return diffInWeeks + ' weeks ago';
        }
        
      }
    }

    export default formatTimestamp