import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import AccountIcon from '@material-ui/icons/AssignmentInd';
import * as Yup from 'yup';

import EmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

import { selectUserProfile } from '../../store/user/selectors';
import { openConfirmationDialog } from '../../store/ui/actionCreators';

const phoneNumberRegExp = /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/;
const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required('Поле необходимо заполнить'),
  email: Yup.string().email('Вы неверно указали адрес электронной почты').required('Поле необходимо заполнить'),
  phoneNumber: Yup.string().matches(phoneNumberRegExp, 'Вы неверно указали номер телефона').required('Поле необходимо заполнить'),
});

const renderField = props => {
  return (
    <TextField
      color="secondary"
      fullWidth
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};

const EditForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fullName, email, phoneNumber } = useSelector(selectUserProfile);

  const handleSubmit = ({ fullName, email, phoneNumber }) => {
    const user = { fullName, email, phoneNumber };
    dispatch(openConfirmationDialog(user));
  }

  return (
    <Formik
      initialValues={{
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
      validationSchema={ProfileSchema}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className={classes.form}>
          <ul className={classes.formInputList}>
            <li>
              <Hidden mdDown>
                <AccountIcon color="primary" style={{ marginRight: 42 }} />
              </Hidden>
              <Field
                component={renderField}
                label="Фамилия и имя"
                name="fullName"
                placeholder="Укажите ваши фамилию и имя"
                type="text"
              />
            </li>

            <Hidden mdDown>
              <Divider orientation="vertical" style={{ marginLeft: 76, marginRight: 28 }} />
            </Hidden>

            <li>
              <Hidden mdDown>
                <EmailIcon color="primary" style={{ marginRight: 42 }} />
              </Hidden>
              <Field
                component={renderField}
                label="E-mail"
                name="email"
                type="email"
              />
            </li>

            <Hidden mdDown>
              <Divider orientation="vertical" style={{ marginLeft: 76, marginRight: 28 }} />
            </Hidden>

            <li>
              <Hidden mdDown>
                <PhoneIcon color="primary" style={{ marginRight: 42 }} />
              </Hidden>
              <Field
                component={renderField}
                label="Номер телефона"
                name="phoneNumber"
                placeholder="Укажите номер телефона"
                type="tel"
              />
            </li>
          </ul>

          <Button
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
            variant="contained"
          >
            Сохранить изменения
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const useStyles = makeStyles(({ breakpoints }) => ({
  form: {
    paddingTop: 28,
    paddingRight: 30,
    paddingBottom: 44,
    paddingLeft: 30,
    textAlign: 'center',
  },
  formInputList: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    marginBottom: 28,
    height: 97,
    listStyle: 'none',

    '& > li': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: 332,

      [breakpoints.down('md')]: {
        marginBottom: 30,
        width: '100%',
        height: 'auto',
      },
    },

    [breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },
}));

export default EditForm;