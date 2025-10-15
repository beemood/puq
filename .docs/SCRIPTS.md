## List of useful scripts 



### Replace content | ( text, placeholder, sed )

Replace all occurance of `OLD_TEXT` with the `NEW_TEXT` in the files under the `*/**/*.?` directory and with the `.template` extention.

```shell
for file in "*/**/*.template"; do
    sed -i 's|OLD_TEXT|NEW_TEXT|g' "$file"
done
```


### Rename files | ( move, mv)

Suffix all files under the `./` the directory and its sub directories by `.template`.

````shell 
for file in *.*; do
    mv "$file" "${file}.template"
done

````

### For each directory | ( for-each, directory)

Find all immediate `(-maxdepth 0)` sub directories of  `./libs/*`, `./plugins`, and `./samples` directories, get the plain directory name such as  from `../*/**/some` to `some`, and run the command for each directory name.

````shell 
find ./libs/* ./plugins/* ./dbs/* ./samples/* -maxdepth 0 -type d | sed 's|./.*/||' | while read dir; do
    npx nx g @puq/plugin:readme @puq/$dir
done
````


### Append content 

Find all immediate sub directories under the `./libs/*`, `./plugins`, and `./samples` directories. And append the first argument provided by the user, which is `$1` after the `3rd` line.

````shell 
find ./libs/* ./plugins/* ./dbs/* ./samples/* -maxdepth 0 -type d |  while read dir; do
    sed -i "3 a\\$1" "$dir/README.md"
done

````