import { postProp } from "../../types"

interface prop{
      data: []
}

const SortDataByTimeCreated = (d:prop)=>{
      return d.data.sort((a:postProp,b:postProp)=>{
            const dateA:any = new Date(a.created_at)
            const dateB:any = new Date(b.created_at)
            return dateB - dateA
      })
}

export default SortDataByTimeCreated