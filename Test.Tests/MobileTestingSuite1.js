//To configure your application follow these instructions: 
// IOS     - http://docs.telerik.com/platform/appbuilder/working-with-telerik-platform/working-with-mobile-testing/configure-ios-app
// Android - http://docs.telerik.com/platform/appbuilder/working-with-telerik-platform/working-with-mobile-testing/configure-android-app
spec(function(){
    // Specify your query objects here.
    var queries = {      
        submitBtn: {id: "submit"},
    };

    // Define your steps here. Use 'ios' and 'android' fields to specify OS specific actions
    // and 'default' fields to specify common action.
    var stepRepository = {
        "launch application": {
            'ios': [
                ios.launch('<<YOUR_IOS_ID>>') // HOW TO GET <<YOUR_IOS_ID>>:
                                              // 1. Go to project Properties
                                              // 2. Open Plugins
                                              // 3. Scroll to MobileTesting plugin
                                              // 4. Expand MobileTesting plugin section
                                              // 5. Click Configuration Variables
                                              // 6. Set IOS_APP_URL. This is your <<YOUR_IOS_ID>>.
            ],
            'android': [
                android.launch('<<YOUR_ANDROID_ID>>') // HOW TO GET <<YOUR_ANDROID_ID>>: 
                                                      // 1. Go to project Properties
                                                      // 2. Open General 
                                                      // 3. Application Identifier is your <<YOUR_ANDROID_ID>>
            ]
        },
                
        "click submit button": {
            'default': [
                web.click(queries.submitBtn)
            ]
        }
    };

    // Describe your suite here. 
    // Note that the steps are defined using a step definitions
    // object instead of being defined inline.
    describe("My Suite", function(){

        test("Launch And Click", function(){
            step("launch application");
            step("click submit button");
        });
    }, stepRepository);
});