angular.module("component").service('component-service',
        ["AnObject", function(AnObject)
{
    var service = {
        anObject: null,
        anotherObject: null,

        getAnObject: function($someVar) {
            if (service.anObject != null) {
                /* && some check to see if we need to load a new object */
                return service.anObject;
            }

            service.anObject = AnObject.query({someVar: $someVar});
            return service.anObject;
        },

        getAnotherObject: function($someVar) {
            if (service.anotherObject != null) {
                /* && some check to see if we need to load a new object */
                return service.anotherObject;
            }

            service.anotherObject = AnotherObject.query({someVar: $someVar});
            return service.anotherObject;
        }
    };

    return service;
}])
