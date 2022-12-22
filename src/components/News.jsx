import NewsLetter from './NewsLetter.jsx';
import './News.css';

function News() {
    return (
        <div class="newsletter-block">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h1>Get Newsletter</h1>
                        <p>
                            Subscribe to our latest news and offers. We treat your personal information with the outmost
                            confidentiality.
                        </p>
                    </div>
                    <div class="col-sm-9">
                        <div role="form" class="wpcf7" id="wpcf7-f399-o1" lang="en-US" dir="ltr">
                            <div class="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true"></p>
                                <ul></ul>
                            </div>
                            <form action="/wp-content/themes/html5blank-stable/templatehtml/css/style.css#wpcf7-f399-o1"
                                method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                <div style="display: none;">
                                    <input type="hidden" name="_wpcf7" value="399" />
                                    <input type="hidden" name="_wpcf7_version" value="5.5.6.1" />
                                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f399-o1" />
                                    <input type="hidden" name="_wpcf7_container_post" value="0" />
                                    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                </div>
                                <div class="field-block">
                                    <div class="mail-block">
                                        <i class='fa fa-envelope'></i><br />
                                        <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="Your Active Email Address" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span><br />
                                        <span id="wpcf7-63a2c5993c7da-wrapper" class="wpcf7-form-control-wrap website-4-wrap" style="display:none !important; visibility:hidden !important;"><label for="wpcf7-63a2c5993c7da-field" class="hp-message">Please leave this field empty.</label><input id="wpcf7-63a2c5993c7da-field" class="wpcf7-form-control wpcf7-text" type="text" name="website-4" value="" size="40" tabindex="-1" autocomplete="new-password" /></span><br />
                                        <span>We'll never share your email address with a third-party</span>
                                    </div>
                                    <div class="btn-block">
                                        <input type="submit" value="SUBSCRIBE" class="wpcf7-form-control has-spinner wpcf7-submit" />
                                    </div>
                                </div>
                                <p style="display: none !important;">
                                    <label>&#916;<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="193" />
                                    <script>
                                        document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );
                                    </script>
                                </p>
                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;