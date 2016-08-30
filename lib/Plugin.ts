module Animate
{
    /**
    * A simple plugin which adds commonly used behaviours to the app
    */
    export class EnBasics implements Animate.IPlugin
    {
        constructor()
        {
        }

        /**
        * This function is called by Animate to get an array of
        * behvaiour definitions. These definitions describe what kind
        * behvaiours a user can create in the scene.
        * @returns {Array<BehaviourDefinition>}
        */
        getBehaviourDefinitions(): Array<BehaviourDefinition>
        {
            var toRet: Array<BehaviourDefinition> = [];

            toRet.push(new BehaviourDefinition("Concat",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropText("A", ""), 'parameter'),
                    new PortalTemplate(new PropText("B", ""), 'parameter'),
                    new PortalTemplate(new PropText("Result", ""), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Debug",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropObject("Object", false), 'parameter'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
            ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Random Int",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("Min", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Max", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Random Float",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Add",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("A", 0), 'parameter'),
                    new PortalTemplate(new PropNum("B", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Subtract",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("A", 0), 'parameter'),
                    new PortalTemplate(new PropNum("B", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Multiply",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("A", 0), 'parameter'),
                    new PortalTemplate(new PropNum("B", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));
            toRet.push(new BehaviourDefinition("Divide",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropNum("A", 0), 'parameter'),
                    new PortalTemplate(new PropNum("B", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, false));

            toRet.push(new BehaviourDefinition("Push",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropObject("Input 1", false), 'parameter'),
                    new PortalTemplate(new PropObject("Push 1", false), 'parameter'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, true));

            toRet.push(new BehaviourDefinition("Alert",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropObject("Message", false), 'parameter'),
                    new PortalTemplate(new PropObject("Message Out", false), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Timer",
                [
                    new PortalTemplate(new PropBool("Start", false), 'input'),
                    new PortalTemplate(new PropBool("Stop", false), 'input'),
                    new PortalTemplate(new PropNum("Seconds", 0, 0), 'parameter'),
                    new PortalTemplate(new PropBool("Loop", true), 'parameter'),
                    new PortalTemplate(new PropNum("Count", 0, 0), 'product'),
                    new PortalTemplate(new PropNum("Delta", 0, 0), 'product'),
                    new PortalTemplate(new PropNum("Total Time", 0, 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output'),
                    new PortalTemplate(new PropBool("On Frame", false), 'output'),
                    new PortalTemplate(new PropBool("On Stopped", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Switch Binary",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropBool("Reset", false), 'input'),
                    new PortalTemplate(new PropBool("A", false), 'output'),
                    new PortalTemplate(new PropBool("B", false), 'output')
                ], this, false, true, true, false));

            toRet.push(new BehaviourDefinition("Message Listener",
                [
                    new PortalTemplate(new PropBool("Start", false), 'input'),
                    new PortalTemplate(new PropBool("Stop", false), 'input'),
                    new PortalTemplate(new PropText("Message", ""), 'parameter'),
                    new PortalTemplate(new PropObject("Data", null), 'product'),
                    new PortalTemplate(new PropBool("On Message", false), 'output'),
                    new PortalTemplate(new PropBool("On Stopped", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Message Dispatcher",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropText("Message", ""), 'parameter'),
                    new PortalTemplate(new PropObject("Data", null), 'parameter'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Math Functions",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropEnum("Function", "Sin", ["Sin", "Tan", "Cos", "ASin", "ATan", "ACos", "Absolute", "Ceil", "Exponent", "Floor", "Log", "Round", "Square Root"]), 'parameter'),
                    new PortalTemplate(new PropNum("Number", 0), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Get Asset Property",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropAsset("Asset", null, [""]), 'parameter'),
                    new PortalTemplate(new PropBool("Use Instance", false), 'parameter'),
                    new PortalTemplate(new PropText("A Name", ""), 'parameter'),
                    new PortalTemplate(new PropObject("A Value", false), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, true, true));

            toRet.push(new BehaviourDefinition("If Condition",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropObject("Condition", false), 'parameter'),
                    new PortalTemplate(new PropBool("True", false), 'output'),
                    new PortalTemplate(new PropBool("False", false), 'output')
                ], this, false, false, false, false));

            toRet.push(new BehaviourDefinition("Counter",
                [
                    new PortalTemplate(new PropBool("Start", false), 'input'),
                    new PortalTemplate(new PropBool("Increment", false), 'input'),
                    new PortalTemplate(new PropNum("Total", 0, 0), 'parameter'),
                    new PortalTemplate(new PropBool("Loop", false), 'parameter'),
                    new PortalTemplate(new PropNum("Counter", 0, 0), 'product'),
                    new PortalTemplate(new PropBool("On Start", false), 'output'),
                    new PortalTemplate(new PropBool("On Reset", false), 'output'),
                    new PortalTemplate(new PropBool("On Complete", false), 'output'),
                    new PortalTemplate(new PropBool("On Counter", false), 'output')
                ], this, false, false, false, false));


            toRet.push(new BehaviourDefinition("Loading Progress",
                [
                    new PortalTemplate(new PropBool("Start", false), 'input'),
                    new PortalTemplate(new PropBool("Stop", false), 'input'),
                    new PortalTemplate(new PropText("Container Name", ""), 'parameter'),
                    new PortalTemplate(new PropNum("Percentage", 0, 0), 'product'),
                    new PortalTemplate(new PropBool("On Start", false), 'output'),
                    new PortalTemplate(new PropBool("On Stop", false), 'output'),
                    new PortalTemplate(new PropBool("On Progress", false), 'output'),
                    new PortalTemplate(new PropBool("On Complete", false), 'output')
                ], this, false, false, false, false));


            toRet.push(new BehaviourDefinition("Get Active Items",
                [
                    new PortalTemplate(new PropBool("Start", false), 'input'),
                    new PortalTemplate(new PropBool("Global",true), 'parameter'),
                    new PortalTemplate(new PropNum("Total Active", 0, 0), 'product'),
                    new PortalTemplate(new PropObject("Items", null), 'product'),
                    new PortalTemplate(new PropBool("Complete", false), 'output')
                ], this, false, false, false, false));


            toRet.push(new BehaviourDefinition("Test",
                [
                    new PortalTemplate(new PropBool("Execute", false), 'input'),
                    new PortalTemplate(new PropObject("A", null), 'parameter'),
                    new PortalTemplate(new PropEnum("Comparison", "Equals", ["Greater", "Greater Equals", "Equals", "Lesser", "Lesser Equals"]), 'parameter'),
                    new PortalTemplate(new PropObject("B", null), 'parameter'),
                    new PortalTemplate(new PropNum("Result", 0), 'product'),
                    new PortalTemplate(new PropBool("True", false), 'output'),
                    new PortalTemplate(new PropBool("False", false), 'output')
                ], this, false, false, true, false));

            return toRet;
        }

        /**
        * This function is called when we need to create a preview for a file that is associated with a project
        * @param {File} file The file that needs to be previewed
        * @param {Component} previewComponent The component which will act as the parent div of the preview.
        * @returns {boolean} Return true if this is handled or false if not.
        */
        onDisplayPreview(file: File, previewComponent: Component): boolean
        {
            return false;
        }

        /**
        * This function is called by Animate to get an array of TypeConverters. TypeConverter objects define if one type can be translated to another. They also define what the process of conversion will be.
        */
        getTypeConverters(): Array<TypeConverter>
        {
            return [];
        }

        /**
        * This function is called by Animate to get an array of
        * AssetsTemplates. The AssetsTemplate object is used to define what assets are available to the scene.
        * Assets are predefined tempaltes of data that can be instantiated. The best way to think of an asset
        * is to think of it as a predefined object that contains a number of variables. You could for example
        * create Assets like cats, dogs, animals or humans. Its really up you the plugin writer how they want
        * to define their assets. This function can return null if no Assets are required.
        * @returns <Array> Returns an array of <AssetTemplate> objects
        */
        getAssetsTemplate(): Array<AssetTemplate>
        {
            return [];
        }

        /**
        * This function is called by Animate when its time to unload a plugin. This should be used
        * to cleanup all resources used by the plugin
        */
        unload(): void
        {
        }

        /**
        * Plugins can return an array of extensions that are allowed to be uploaded for Asset files. For example
        * your plugin might require images and so would allow png and jpg files.
        * Each extension must just be in the following format: ["png", "jpg" ..etc]
        * @param {Array<string>} extArray The array of allowed extensions that are so far allowed.
        * @returns {Array<string>} An array of allowed file extensions.
        */
        getFileUploadExtensions(extArray: Array<string>): Array<string>
        {
            return [];
        }
    }
}

__newPlugin = new Animate.EnBasics();