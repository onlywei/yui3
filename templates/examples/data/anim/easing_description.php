<h3>Setting up the HTML</h3>
<p>First we add some HTML to animate.</p>
<textarea name="code" class="JScript" cols="60" rows="1">
<div id="demo" class="yui-module">
    <div class="yui-hd">
        <h4>Animation Demo</h4>
        <a title="remove module" class="yui-toggle"><em>-</em></a>
    </div>
    <div class="yui-bd">
        <p>This an example of what you can do with the YUI Animation Utility.</p>
        <p><em>Follow the instructions above to see the animation in action.</em></p>
    </div>
</div>
</textarea>

<h3>Creating the Anim Instance</h3>
<p>Now we create an instance of <code>Y.Anim</code>, passing it a configuration object that includes the <code>node</code> we wish to animate and the <code>to</code> attribute containing the final properties and their values.</p>

<textarea name="code" class="JScript" cols="60" rows="1">
var anim = new Y.Anim({
    node: '#demo .yui-bd',
    to: { height: 0 },
    easing: Y.Easing.backIn
});
</textarea>

<h3>Running the Animation</h3>
<p>Finally we add an event handler to run the animation.</p>
<textarea name="code" class="JScript" cols="60" rows="1">
var onClick = function(e) {
    e.preventDefault();
    anim.run();
};
Y.get('#demo .yui-toggle').on('click', onClick);
</textarea>

<h3>Full Script Source</h3>
<textarea name="code" class="JScript" cols="60" rows="1">
YUI().use('anim', function(Y) {
    var anim = new Y.Anim({
        node: '#demo .yui-bd',
        to: { height: 0 },
        easing: Y.Easing.backIn
    });

    var onClick = function(e) {
        e.preventDefault();
        anim.run();
    };
    Y.get('#demo .yui-toggle').on('click', onClick);

});
</textarea>
