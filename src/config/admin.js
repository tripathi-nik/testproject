import config from 'react-global-configuration';
config.set({
   development:{
      serverUrl: 'http://localhost:5000/',
   },
   production:{
     serverUrl: 'https://infinite-hamlet-52488.herokuapp.com/',
   },
   loadingImage: 'http://localhost/reactApi/wp-content/uploads/2020/05/4cf423dc7c2321aa9b733c20c53752b7.gif',
   agent_account_added: 'You are successfully registered with your account',
   unique_email: 'email_address',
   unique_email_error: 'Email address already in use please enter a unique value',
   status_success: '200',
   status_failure: '400',
   email_address_error: 'Entered email doesnot exist. Please re check.',
   input_password_error: 'Password entered for the user is incorrect. Please check again',
   user_found_success: 'You are successfully login. Please wait while we are redirecting',
   success_toast_color: '#53ae61',
   failure_toast_color: '#e580ba',
   redirect_to_admin: ['register','login'],
   secure_url: ['admin']
 });
