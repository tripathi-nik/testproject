import config from 'react-global-configuration';
config.set({
   development:{
      serverUrl: 'http://localhost:5000/',
      imagePath: 'http://localhost/ecom-project/ecom-backend/',
   },
   production:{
     serverUrl: 'https://infinite-hamlet-52488.herokuapp.com/',
     imagePath: 'https://infinite-hamlet-52488.herokuapp.com/',
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
   redirect_to_admin: ['admin/register','admin/login'],
   secure_url: ['admin','admin/profile'],
   dummy_image: 'https://source.unsplash.com/QAB-WJcbgJk/60x60',
   env: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'?'development':'production',
   sale_price_error: 'Sale Price should always be less than or equal to cost price',
   product_success: 'Product added successfully'
 });
