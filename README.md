# svs-mock-servers

Mock SVS servers for development. CLI utility to start a mock CallML, MBA, and CRM server for testing in development.

## Getting started

### Install

```sh
git clone git@github.com:tableflip/svs-mock-servers.git
cd svs-mock-servers
npm link
```

### Start

```sh
svs-mock-servers
```

#### Usage

```
CLI utility to start a mock CallML, MBA, and CRM server for testing in development.

Usage: svs-mock-servers [options...]

Options:
  --no-callml      Don't start a CallML server
  --no-mba         Don't start an MBA server
  --no-crm         Don't start a CRM server
  --callml-port    Port number for CallML server (default 3050)
  --mba-port       Port number for MBA server (default 3070)
  --crm-port       Port number for CRM server (default 3060)
  --callml-fail    Set appverified to "No" in CallML responses
  --crm-fail       Make all requests fail with status 100 and NOK message
  -v, --version    Print the version number and exit
  -h, --help       Print this message and exit
```