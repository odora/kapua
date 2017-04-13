/*******************************************************************************
* Copyright (c) 2016, 2017 Eurotech and/or its affiliates                       
*                                                                               
* All rights reserved. This program and the accompanying materials              
* are made available under the terms of the Eclipse Public License v1.0         
* which accompanies this distribution, and is available at                      
* http://www.eclipse.org/legal/epl-v10.html                                     
*                                                                               
* Contributors:                                                                 
*     Eurotech - initial API and implementation                                 
*                                                                               
*******************************************************************************/
export default class RoleDetailSubjectsCtrl {
  private roleId: string;

  constructor(private $stateParams: angular.ui.IStateParamsService,
              private $http: angular.IHttpService) {
    this.roleId = $stateParams["idRole"];
  }
}