const data = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Smith",
    },
    {
        id: 3,
        name: "Emily Johnson",
    },
    {
        id: 4,
        name: "Michael Brown",
    },
    {
        id: 5,
        name: "Sarah Davis",
    },
    {
        id: 6,
        name: "David Wilson",
    },
    {
        id: 7,
        name: "Laura Garcia",
    },
    {
        id: 8,
        name: "James Martinez",
    },
    {
        id: 9,
        name: "Linda Anderson",
    },
    {
        id: 10,
        name: "Robert Thomas",
    },

]

for(let i=0;i<data.length;i++){
    const myobj = data[i];
    // console.log(myobj.name);
    myobj.rollno = i;
}
console.log(data);