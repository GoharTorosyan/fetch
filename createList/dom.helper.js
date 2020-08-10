
export const getRowOfTable=(items)=>{

    const tr = document.createElement("tr");

    items.forEach((item)=>{
        const td =  document.createElement("td");
        td.textContent=item;
        tr.append(td)
    })
    return tr;
}