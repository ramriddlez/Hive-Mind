# file-share

Share directory and files on http server on a go.

## Install

```sh
$ npm install file-share -g
```

## Share Files

After Installing the module, run following command in terminal to share files/directory :

```sh
$ file-share --port --path
```
### port (optional)
 -  Provide port number, you want to use. Default port is 9000.

### path (optional)
 - Absolute path of directory, you want to share. Default path is current directory.

### Example

```sh
$ file-share --port 8080 --path /home/user
$ file-share --port=8080 --path=/home/user
$ file-share --port 8080
$ file-share --path /home/user
$ file-share
```
