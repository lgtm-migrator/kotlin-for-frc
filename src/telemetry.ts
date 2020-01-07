"use strict";
import * as vscode from "vscode";
import TelemetryReporter from "vscode-extension-telemetry";
import { robotType } from "./templates/template_interpreter";

export class TelemetryWrapper {
	private reporter: TelemetryReporter;
	private inExtensionHost: boolean;

	constructor() {
		this.inExtensionHost = (vscode.env.machineId === "someValue.machineId");
		
		if (!this.inExtensionHost) {
			// If the extension is not being debugged, create the TelemetryReporter
			const extensionId = "brenek.kotlin-for-frc";
			const extensionVersion = vscode.extensions.getExtension(extensionId)!.packageJSON.version;

			const botNoStealingKeys = Buffer.from("OTA1NzZlNjItZTJkNC00MTc3LWJjOTYtMDAyMmQ0YTk4OGQ0", "base64").toString();
	
			this.reporter = new TelemetryReporter(extensionId, extensionVersion, botNoStealingKeys);
		} else {
			// If the extension is being debugged, create a bogus reporter that might fail
			this.reporter = new TelemetryReporter("extension.host", "0.0.1", Buffer.from("ZGU4ZjQ1NTEtNjU0OS00NGJlLWI5ZDUtZmU0ODNjOWE1OTFi", "base64").toString());
		}
	}

	sendCommandRun(commandName: string) {
		if (!this.inExtensionHost) {
			this.reporter.sendTelemetryEvent("commandRun", {"commandName": commandName}, undefined);
		}
	}

	sendRobotType(type: robotType) {
		if (!this.inExtensionHost) {
			this.reporter.sendTelemetryEvent("robotType", {"robotType": type.toString()}, undefined);
		}
	}

	dispose() {this.reporter.dispose();}
}