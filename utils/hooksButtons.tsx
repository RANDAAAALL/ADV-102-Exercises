import { AntDesign, MaterialIcons } from '@expo/vector-icons';

 const buttons = [
    {id: 1, name: "Start"},
    {id: 2, name: "Reset"},
];

interface TaskButtons{
    id: number;
    name: string;
    icon: any;
}

 const taskBtns = (Color: string): TaskButtons[] => {
    return [
        { id: 1, name: "Edit", icon: <AntDesign name="edit" size={32} color={Color} />  },
        { id: 2, name: "Remove", icon: <MaterialIcons name="delete-outline" size={35} color={Color} /> }
    ];
}


export {buttons, taskBtns};
