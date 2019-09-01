/* API path */

/**
 * Login into user dashboard
 *
 * @Method : POST
 * @Params :  { email: string , password: string }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const LOGIN_API = 'login';


/**
 * User registration
 *
 * @Method : POST
 * @Params : {
        first_name: string,
        middle_name: string,
        last_name: string,
        dob: Date,
        email: string,
        password: string,
        phone: string,
        address: {
        country: string,
        state: string,
        city: string,
        zip: string,
        street: string,
      },
       security: {
        question:string,
        answer:string
      }
    }
  * @header : {Authorization(Bearer token): false, login_id: false}
  *
  */
export const REGISTER_API = 'register';


/**
 * Get user detail by otp
 * This api is a part of otp verification process
 *
 * @Method : Post
 * @Params : {
     id: string(phoneVerificationKey)
    }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const GET_USER_BY_OTP = 'user/byotp';

/**
 * Verify otp
 * This api is a part of otp verification process
 *
 * @Method : Post
 * @Params : {
     token: string,
        otp: string
    }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const VERIFY_OTP = 'otp/verify';


/**
 * Get profile information by user id
 *
 * @Method : Get
 * @Params : {
     id: string
    }
* @header : {Authorization(Bearer token): true, login_id: true}
*
*/
export const GET_USER_DETAIL = 'profile';


/**
 * Update profile information
 *
 * @Method : Put
 * @Params : {
        first_name: string,
        middle_name: string,
        last_name: string,
        dob: Date,
        email: string,
        emailChange: 1(if email address change),
        password: string,
        phone: string,
        phoneChange: 1 (if phone number change),
        address: {
            country: string,
            state: string,
            city: string,
            zip: string,
            street: string,
        },
        security: {
            question: string,
            answer: string
        },
        document;{
            documentType: string,
            documentNumber: string,
            expiryDate: string,
            documentStatus: enum(verified/unverified)
        }
    }
 * @header : {Authorization(Bearer token): true, login_id: true}
 *
 */
export const UPDATE_USER = 'profile/update';


/**
 * Verify email address after change for logged-in user
 *
 * @Method : Pet
 * @Params : {
     id: string
    }
 * @header : {Authorization(Bearer token): true, login_id: true}
 *
 */
export const SEND_EMAIL_VERIFICATION_LINK = 'email/reverification';


/**
 * Resend email activation link
 *
 * @Method : Put
 * @Params : {
     email: string
    }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const RESEND_EMAIL_VERIFICATION_LINK = 'account/activation';



/**
 * Send otp again to verfy phone
 *
 * @Method : Put
 * @Params : {
     token: string(phoneVerificationKey)
    }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const SEND_OTP_AGAIN = 'contact/verification';

/**
 * Change phone number
 *
 * @Method : Put
 * @Params : {
     id: string(user id),
        phone: string,
        token: string(phoneVerificationKey)
    }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const CHANGE_CONTACT = 'contact/update';


/**
* Resend phone verification otp
*
* @Method : Put
* @Params : {
    id: string(user id)
  }
* @header : {Authorization(Bearer token): true, login_id: true}
*
*/
export const LOGGEDIN_USER_OTP = 'contact/reverification';


/**
* Upload profile image
*
* @Method : Post
* @Params : {
        data: {folder:String,user_id:string},
        file:File
    }
* @header : {Authorization(Bearer token): true, login_id: true}
*
*/
export const FILE_UPLOAD = 'file/upload';


/**
* Update Password
*
* @Method : Put
* @Params : {
        id: string(user id),
        old_password: string,
        new_password: string
    }
* @header : {Authorization(Bearer token): true, login_id: true}
*
*/
export const CHANGE_PASSWORD = 'password/update';

/**
* Check tag availability
*
* @Method : Post
* @Params : {
        tag: string
    }
* @header : {Authorization(Bearer token): false, login_id: false }
*
*/
export const CHECK_TAG_AVAILABILITY = 'check-tag-availability';


/**
* Send forgot password link
*
* @Method : Post
* @Params : {
        email: string
    }
* @header : {Authorization(Bearer token): false, login_id: false }
*
*/
export const FORGOT_PASSWORD = 'password/forgot';

/**
* Reset password after forgot password
*
* @Method : Put
* @Params : {
        token: string,
        password: string
    }
* @header : {Authorization(Bearer token): false, login_id: false }
*
*/
export const RESET_PASSWORD = 'password/reset';


/**
 * Get security questions list
 *
 * @Method : Get
 * @Params : { }
 * @header : {Authorization(Bearer token): false, login_id: false }
 *
 */
export const GET_SECURITY_QUESTIONS = 'security-question/list';


/**
 * Get page by slug
 *
 * @Method : GET
 * @Params :  { slug: String }
 * @header : {
     Authorization(Bearer token): false, login_id: false }
 *
 */
export const GET_PAGE_DETAIL = 'page/detail';


/**
 * Get menu by menu id
 *
 * @Method : GET
 * @Params :  { id: String }
 * @header : {
     Authorization(Bearer token): false,
        login_id: false
    }
 *
 */
export const GET_MENU = 'menu';


/**
 * Get pages slug
 *
 * @Method : GET
 * @Params :  {  }
 * @header : {
     Authorization(Bearer token): false,
        login_id: false
    }
 *
 */
export const GET_SLUG = 'page/list';


/**
 * Get meta settings
 *
 * @Method : GET
 * @Params :  { }
 * @header : {
     Authorization(Bearer token): false,
        login_id: false
    }
 *
 */
export const GET_META_SETTINGS = 'get-meta';


/**
 * Get department list
 *
 * @Method : GET
 * @Params :  { }
 * @header : {Authorization(Bearer token): true, login_id: true}
 *
 */
export const GET_CAREER_DEPARTMENT = 'career/department/list';


/**
 * Get office list
 *
 * @Method : GET
 * @Params :  { }
 * @header : {Authorization(Bearer token): true, login_id: true}
 *
 */
export const GET_CAREER_OFFICE = 'career/office/list';


/**
 * Get opening
 *
 * @Method : GET
 * @Params: { }
 * @header : {Authorization(Bearer token): true, login_id: true}
 *
 */
export const GET_OPENINGS = 'career/openings';


/**
* Job apply
*
* @Method : Post/MULTIPART
* @Params : {
        data: {
            folder: String,
            first_name: String,
            last_name: String,
            email: String,
            phone: String
        },
        file:File
    }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const APPLY_JOB = 'career/apply';


/**
* Get help
*
* @Method : GET
* @Params : { }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const GET_HELP = 'help';

/**
 * Submit feedback form
 *
 * @Method : POST
 * @Params : {
     first_name: String,
      last_name: String,
      email: String,
      contact_preference: String,
      comment: String
  }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const POST_FEEDBACK = 'feedback';


/**
* Submit complaint form
*
* @Method : POST
* @Params : {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        address: String,
        contact_preference: String,
        comment: String,
        service_type: String,
        transaction_reference_number: String,
        send_date: String,
        payment_date: String,
        send_country: String,
        receive_country: String,
        money_order_number: String,
        amount: String,
        purchase_date: String,
        autherization: String,
        existing_case_number: String,
        complaint_reference_number: String
  }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const POST_COMPLAINT = 'complaint';



/**
 * Submit fraud form
 *
 * @Method : POST
 * @Params : {
      first_name: String,
      last_name: String,
      email: String,
      phone: String,
      address: String,
      contact_preference: String,
      comment: String,
      service_type: String,
      transaction_reference_number: String,
      send_date: String,
      payment_date: String,
      send_country: String,
      receive_country: String,
      money_order_number: String,
      amount: String,
      purchase_date: String,
      autherization: String
  }
* @header : {Authorization(Bearer token): false, login_id: false}
*
*/
export const POST_FRAUD = 'fraud';



/**
 * Get blogs list
 *
 * @Method : GET
 * @Params :  {  }
 * @header : {
        Authorization(Bearer token): false,
        login_id: false
    }
  *
  */
export const LIST_BLOG = 'blog/list';


/**
 * Get blog by slug
 *
 * @Method : GET
 * @Params :  {  }
 * @header : {
      Authorization(Bearer token): false,
      login_id: false
  }
*
*/
export const BLOG_DETAIL = 'blog/detail';


/**
 * Get home section detail
 *
 * @Method : GET
 * @Params :  { }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const HOME_DETAIL = 'home/detail';


/**
 * Get home section detail
 *
 * @Method : GET
 * @Params :  { }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const POST_BECOME_AGENT = 'become-agent';

/**
 * Get home section detail
 *
 * @Method : GET
 * @Params :  { }
 * @header : {Authorization(Bearer token): false, login_id: false}
 *
 */
export const GET_EXCHANGE_RATE = 'exchange/rate';


export const GET_STATE = 'states';
