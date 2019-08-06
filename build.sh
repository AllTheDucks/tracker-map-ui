google-closure-compiler \
    --externs externs/leaflet.js \
    --entry_point atd.paddle.App \
    --js ./src/js/**.js \
    --js node_modules/google-closure-library/**/*.js \
    --js_output_file=build/js/main.js \
    --create_source_map build/js/main.js.map \
    --compilation_level SIMPLE \
    --hide_warnings_for='node_modules' \
    --dependency_mode=STRICT \
    --warning_level=VERBOSE \
    --jscomp_error=*\
    --jscomp_warning=lintChecks

mkdir -p build/js
mkdir -p build/css
mkdir -p build/images

cp src/*.html build/
cp lib/leaflet/leaflet.js build/js

cp lib/leaflet/leaflet.css build/css
cp src/css/*.css build/css

cp -r lib/leaflet/images/ build/images