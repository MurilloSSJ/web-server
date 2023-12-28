import Image from "next/image"
import { ContainerOption, MenuContainer, MenuItem } from "./styles"
import Logo from '../../../assets/logo.png'
import { PiFlowerLotus } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { FlexContainer } from "@/components/containers/flexContainer";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiArchiveBox } from "react-icons/pi";



export const SideMenu = () => {
    return (
        <MenuContainer>
            <Image src={Logo} alt="Logo Image" width={60} />
            <FlexContainer alignItems="center" justifyContent="start" direction="col" paddingTop={50}>
                <ContainerOption>
                    <MenuItem className="active">
                        <IoHomeOutline size={35} />
                    </MenuItem>
                    <MenuItem>
                        <PiFlowerLotus size={35} />
                    </MenuItem>
                    <MenuItem>
                        <PiArchiveBox size={35} />
                    </MenuItem>
                    <MenuItem>
                        <PiUsers size={35} />
                    </MenuItem>
                </ContainerOption>
            </FlexContainer>
            <FlexContainer>
                <ContainerOption>
                    <MenuItem>
                        <IoIosLogOut size={35} />
                    </MenuItem>
                    <MenuItem>
                        <IoSettingsOutline size={35} />
                    </MenuItem>
                </ContainerOption>
            </FlexContainer>
        </MenuContainer>
    )
}