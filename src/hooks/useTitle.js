import { useEffect } from "react"

const useTitle = title => {
  useEffect(()=>{
    document.title = `${title} - Smile Builders`;
  },[title])
}

export default useTitle;