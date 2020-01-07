export class OldCommandSubsystemTemplate {
  private useAtProjectConversion: boolean;
  private text: string;  
  constructor() {
      this.useAtProjectConversion = false;
      this.text = `/*----------------------------------------------------------------------------*/
/* Copyright (c) 2017-2018 FIRST. All Rights Reserved.                        */
/* Open Source Software - may be modified and shared by FRC teams. The code   */
/* must be accompanied by the FIRST BSD license file in the root directory of */
/* the project.                                                               */
/*----------------------------------------------------------------------------*/
      
package #{PACKAGE}
      
import edu.wpi.first.wpilibj.command.Subsystem
      
/**
 * Add your docs here.
 */
class #{NAME} : Subsystem() {
  // Put methods for controlling this subsystem
  // here. Call these from Commands.
      
  override fun initDefaultCommand() {
    // Set the default command for a subsystem here.
    // setDefaultCommand(new MySpecialCommand());
  }
}
`;
}
public getText(): string {
  return this.text;
}
public useAtConversion(): boolean {
  return this.useAtProjectConversion;
}
}