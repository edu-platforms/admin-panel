import { Link } from "react-router-dom"
import { Button } from "antd"
import { EyeOutlined } from "@ant-design/icons"
import { constantsDictionary } from "@/constants"

export const View = ({ link }) =>
    <Link to={link}>
        <Button type="primary" icon={<EyeOutlined />}>
            {constantsDictionary.view}
        </Button>
    </Link>
