find ./libs/* ./plugins/* ./dbs/* ./samples/* -maxdepth 0 -type d | sed 's|./.*/||' | while read dir; do
    npx nx g @puq/plugin:readme @puq/$dir
done
