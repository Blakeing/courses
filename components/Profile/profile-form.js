import { useRef } from "react";

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    // <form className={classes.form} onSubmit={submitHandler}>
    //   <div className={classes.control}>
    //     <label htmlFor='new-password'>New Password</label>
    //     <input type='password' id='new-password' ref={newPasswordRef} />
    //   </div>
    //   <div className={classes.control}>
    //     <label htmlFor='old-password'>Old Password</label>
    //     <input type='password' id='old-password' ref={oldPasswordRef} />
    //   </div>
    //   <div className={classes.action}>
    //     <button>Change Password</button>
    //   </div>
    // </form>
    <form onSubmit={submitHandler}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-6 bg-white sm:p-6">
          <div>
            <h2
              id="payment_details_heading"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Update Password
            </h2>
            <p className="mt-1 text-sm text-gray-500">Update your password.</p>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                ref={newPasswordRef}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="old-password"
                className="block text-sm font-medium text-gray-700"
              >
                Old Password
              </label>
              <input
                type="password"
                id="old-password"
                ref={oldPasswordRef}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
