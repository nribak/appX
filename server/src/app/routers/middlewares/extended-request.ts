import express from "express";

export default interface ExtendedRequest extends express.Request {
    payload: any
}

