import React, {useState} from 'react'
import styles from "./TextField.module.css"
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import PropTypes from 'prop-types';

const TextField = ({ id, label, type, required, funcaoOnChange, value, placeholder, estiloInline }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={styles.text_field} style={estiloInline}>
            <label
                htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                required={required}
                onChange={event => funcaoOnChange(event.target.value)}
                value={value}
                placeholder={placeholder} />
            {type === 'password' ?
                <button
                id={styles.password_btn}
                onClick={togglePassword}
                type="button"
                > { showPassword ? <FaEyeSlash/> : <FaEye/>}</button> : ''  
            }
        </div>
    )
}

TextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    funcaoOnChange: PropTypes.func,
    value: PropTypes.string,
    placeHolder: PropTypes.string,
    estiloInline: PropTypes.object
}

TextField.defaultProps = {
    id: "email",
    label: "Email",
    type: "email",
    required: false,
    funcaoOnChange: null,
    value: "",
    placeHolder: "Digite seu e-mail",
    estiloInline: {}
}

export default TextField;