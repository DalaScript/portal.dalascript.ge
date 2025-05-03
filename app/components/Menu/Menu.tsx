import { MenuItem } from "../MenuItem/MenuItem"


export const Menu = () => {

    return (
        <div>
            <MenuItem>
                მთავარი
            </MenuItem>
            <MenuItem>
                ჩვენს შესახებ
            </MenuItem>
            <MenuItem size='big'>
                კონტაქტი
            </MenuItem>
            <MenuItem size='big'>
                პროექტები
            </MenuItem>
        </div>
    )
}