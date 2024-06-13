import express from "express";
import type { Request,Response } from "express";
import {body, validationResult} from "express-validator";
import * as OwnerService from "./owner.service"
import { request } from "http";


export const ownerRouter= express.Router();


// Get :list of all Owners
 ownerRouter.get("/",async(request:Request, response:Response)=>{
    try{
        const owners = await OwnerService.listOwner()
        return response.status(200).json(owners)
    } catch(error:any){
        return response.status(500).json(error.massage)
    }
 } )

 // Git: a single owner  by ID

 ownerRouter.get("/:id",async(request:Request, response:Response)=>{

    const id:number = parseInt(request.params.id,10);
    try{
        const owner = await OwnerService.getOwner(id)
        if(owner)
        {
            return response.status(200).json(owner)
        }
        return response.status(404).json("  لاتوجد بيانات مطابقة")
    } catch(error:any){
        return response.status(500).json(error.massage)
    }
 })

// add new owner
 ownerRouter.post("/",  async(request:Request, response:Response)=>{
   
    try{
        const owner = request.body
        const newOwner = await  OwnerService.creatOwner(owner)
        return response.status(201).json(newOwner)
    } catch(error: any) {
        return  response.status(500).json(error.massage)
    }
 })