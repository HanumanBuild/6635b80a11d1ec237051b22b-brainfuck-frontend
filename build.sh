#!/bin/bash
set -o errexit
export REACT_APP_BRAINFUCK_FRONTEND_URL=$BRAINFUCK_FRONTEND_URL
export REACT_APP_BRAINFUCK_BACKEND_URL=$BRAINFUCK_BACKEND_URL
npm install && npm run build