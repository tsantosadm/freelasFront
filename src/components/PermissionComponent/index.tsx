import React, { useEffect, useState } from 'react';
import api from '../../services/api';


interface PermissionComponentProps {
    role?: string;
}

const PermissionComponent: React.FC<PermissionComponentProps> = ({ role, children }) => {
    const [permissions, setPermissions] = useState([] as string[]);

    useEffect(() => {
        async function loadRoles() {

            console.log("Rotas", role);
            const response = await api.get("/companys/roles");
            const findRole = response.data.some((r: string) =>
                role?.split(",").includes(r)
            );
            setPermissions(findRole);


            // if (role === "ROLE_USER") {

            //     const response = await api.get("/users/roles");
            //     const findRole = (await response).data.find((r: string) => r === "ROLE_USER")
            //     setPermissions(findRole);
            // } else {
            //     const response = await api.get("/companys/roles");
            //     const findRole = (await response).data.find((r: string) => r === "ROLE_ADMIN")
            //     setPermissions(findRole);
            // }    
        }
        console.log("LoadRotas", role);

        loadRoles();
    }, [role]);

    return (
        <>
            {permissions && children}
        </>
    )
}

export default PermissionComponent;