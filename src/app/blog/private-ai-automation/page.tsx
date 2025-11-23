"use client"

import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function PrivateAIAutomation() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Private AI Automation with Open Source Models
          </h1>
          <p className="text-xl text-slate-300">
            Deploying Gemma, Llama, and other Ollama models for HIPAA-compliant, privacy-preserving workflow automation at scale
          </p>
          <div className="mt-4 text-slate-400">November 23, 2024 · 25 min read</div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-none">
          
          <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">Introduction</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The rise of large language models has created unprecedented opportunities for workflow automation. However, sending 
            sensitive data to third-party APIs poses unacceptable risks for healthcare, finance, and government sectors. This 
            guide demonstrates how to deploy privacy-preserving AI infrastructure using open-source models, with a focus on 
            HIPAA compliance and cost-effective scaling.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>HIPAA Compliance Note:</strong> While this guide provides technical infrastructure for private AI deployment, 
                  HIPAA compliance requires additional administrative, physical, and technical safeguards beyond the scope of this article. 
                  Consult with compliance experts for your specific use case.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Why Open Source Models?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Open-source models offer critical advantages for sensitive applications:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2 mb-6">
            <li><strong>Data sovereignty</strong>: All processing occurs within your infrastructure</li>
            <li><strong>No data retention</strong>: Unlike APIs, no third party logs or trains on your data</li>
            <li><strong>Auditable security</strong>: Model code and weights can be inspected</li>
            <li><strong>Cost predictability</strong>: Fixed infrastructure costs vs per-token API pricing</li>
            <li><strong>Customization</strong>: Fine-tune models on domain-specific data</li>
            <li><strong>Regulatory compliance</strong>: Easier to meet HIPAA, GDPR, and industry requirements</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Ollama Models: Comprehensive Comparison</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Ollama provides an easy-to-use platform for running open-source models locally or in your infrastructure. 
            Here's a detailed comparison of popular models:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Model</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Size</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">VRAM</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Best For</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Strengths</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Weaknesses</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Gemma:2b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">2B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">4GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Fast responses, edge deployment</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Very fast, low resource</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Limited reasoning</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Gemma:7b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">7B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">8GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">General automation, chatbots</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Good balance, efficient</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Complex tasks limited</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Gemma:27b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">27B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">20GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Complex workflows, analysis</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Strong reasoning, versatile</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Higher resource needs</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Llama 3:8b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">8B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">8GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">General purpose, coding</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Excellent coding, fast</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Moderate reasoning</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Llama 3:70b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">70B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">48GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Advanced reasoning, research</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Superior quality, versatile</td>
                  <td className="px-4 py-4 text-sm text-slate-700">High compute cost</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Mixtral:8x7b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">47B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">32GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Multi-task, high quality</td>
                  <td className="px-4 py-4 text-sm text-slate-700">MoE efficiency, multilingual</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Complex deployment</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Mistral:7b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">7B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">8GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Cost-effective quality</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Great value, efficient</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Less capable than 70B+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">CodeLlama:13b</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">13B params</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-700">12GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Code generation, analysis</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Specialized for code</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Limited general knowledge</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Model Selection Guidance</h3>
          
          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">For Medical/HIPAA Applications</h4>
              <p className="text-slate-700 mb-2"><strong>Recommended:</strong> Gemma:27b or Llama 3:70b</p>
              <p className="text-slate-700">
                Healthcare requires high accuracy and strong reasoning. Gemma:27b provides excellent performance at moderate 
                cost, while Llama 3:70b offers the highest quality for critical applications.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">For Document Processing/Analysis</h4>
              <p className="text-slate-700 mb-2"><strong>Recommended:</strong> Gemma:27b or Mixtral:8x7b</p>
              <p className="text-slate-700">
                Both models excel at understanding and analyzing documents. Mixtral's mixture-of-experts architecture 
                handles diverse document types efficiently.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">For High-Volume, Simple Tasks</h4>
              <p className="text-slate-700 mb-2"><strong>Recommended:</strong> Gemma:7b or Mistral:7b</p>
              <p className="text-slate-700">
                For classification, extraction, or simple Q&A, 7B models offer the best cost-performance ratio. 
                Deploy multiple instances for high throughput.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">For Code-Heavy Workflows</h4>
              <p className="text-slate-700 mb-2"><strong>Recommended:</strong> CodeLlama:13b or Llama 3:70b</p>
              <p className="text-slate-700">
                CodeLlama specializes in code, while Llama 3:70b handles both code and natural language exceptionally well.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Kubernetes Deployment</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Let's deploy Gemma:27b on Kubernetes with GPU support, load balancing, and automatic scaling.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Step 1: Create Namespace and ConfigMap</h3>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ai-automation
  labels:
    name: ai-automation
    compliance: hipaa

---
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ollama-config
  namespace: ai-automation
data:
  OLLAMA_HOST: "0.0.0.0:11434"
  OLLAMA_MODELS: "/models"
  OLLAMA_NUM_PARALLEL: "4"  # Number of parallel requests
  OLLAMA_MAX_LOADED_MODELS: "2"  # Keep 2 models in memory
  OLLAMA_GPU_LAYERS: "999"  # Offload all layers to GPU`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Step 2: Create Persistent Volume for Models</h3>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# pvc.yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ollama-models-pvc
  namespace: ai-automation
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: fast-ssd  # Use fast SSD for model loading
  resources:
    requests:
      storage: 100Gi  # Gemma:27b needs ~30GB, allow space for multiple models`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Step 3: Deploy Ollama with Gemma:27b</h3>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ollama-gemma27b
  namespace: ai-automation
  labels:
    app: ollama
    model: gemma27b
spec:
  replicas: 2  # Start with 2 replicas
  selector:
    matchLabels:
      app: ollama
      model: gemma27b
  template:
    metadata:
      labels:
        app: ollama
        model: gemma27b
    spec:
      # Node affinity for GPU nodes
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: nvidia.com/gpu
                operator: Exists
              - key: gpu-type
                operator: In
                values:
                - a100
                - v100
      
      # Pod Anti-affinity to spread across nodes
      podAntiAffinity:
        preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 100
          podAffinityTerm:
            labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - ollama
            topologyKey: kubernetes.io/hostname
      
      containers:
      - name: ollama
        image: ollama/ollama:latest
        imagePullPolicy: Always
        
        ports:
        - containerPort: 11434
          name: http
          protocol: TCP
        
        envFrom:
        - configMapRef:
            name: ollama-config
        
        resources:
          requests:
            memory: "24Gi"
            cpu: "4"
            nvidia.com/gpu: "1"
          limits:
            memory: "32Gi"
            cpu: "8"
            nvidia.com/gpu: "1"
        
        volumeMounts:
        - name: models
          mountPath: /models
        
        # Startup probe - model loading can take time
        startupProbe:
          httpGet:
            path: /api/tags
            port: 11434
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 30  # Allow 5 minutes for startup
        
        # Liveness probe
        livenessProbe:
          httpGet:
            path: /api/tags
            port: 11434
          periodSeconds: 30
          timeoutSeconds: 5
          failureThreshold: 3
        
        # Readiness probe
        readinessProbe:
          httpGet:
            path: /api/tags
            port: 11434
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        
        # Lifecycle hook to pull model on start
        lifecycle:
          postStart:
            exec:
              command:
              - "/bin/sh"
              - "-c"
              - "ollama pull gemma:27b"
      
      volumes:
      - name: models
        persistentVolumeClaim:
          claimName: ollama-models-pvc
      
      # Security context for HIPAA compliance
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
      
      # Toleration for GPU nodes
      tolerations:
      - key: nvidia.com/gpu
        operator: Exists
        effect: NoSchedule`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Step 4: Create Service and Ingress</h3>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: ollama-service
  namespace: ai-automation
  labels:
    app: ollama
spec:
  type: ClusterIP
  sessionAffinity: ClientIP  # Stick sessions for better caching
  sessionAffinityConfig:
    clientIP:
      timeoutSeconds: 3600  # 1 hour session stickiness
  ports:
  - port: 80
    targetPort: 11434
    protocol: TCP
    name: http
  selector:
    app: ollama

---
# ingress.yaml (optional, for external access)
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ollama-ingress
  namespace: ai-automation
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
    # Increase timeout for long-running generation
    nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
    # TLS for HIPAA compliance
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - ai.yourdomain.com
    secretName: ollama-tls
  rules:
  - host: ai.yourdomain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ollama-service
            port:
              number: 80`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Step 5: Horizontal Pod Autoscaler</h3>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ollama-hpa
  namespace: ai-automation
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ollama-gemma27b
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  # Scale based on GPU utilization (requires metrics-server with GPU support)
  - type: Pods
    pods:
      metric:
        name: gpu_utilization
      target:
        type: AverageValue
        averageValue: "75"
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300  # Wait 5 min before scaling down
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 60  # Quick scale up
      policies:
      - type: Percent
        value: 100
        periodSeconds: 30`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Deploy Everything</h3>

          <div className="my-6">
            <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# Apply all manifests
kubectl apply -f namespace.yaml
kubectl apply -f configmap.yaml
kubectl apply -f pvc.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f hpa.yaml

# Monitor deployment
kubectl get pods -n ai-automation -w

# Check logs
kubectl logs -n ai-automation -l app=ollama --tail=100 -f

# Test the service
kubectl port-forward -n ai-automation svc/ollama-service 11434:80

# Make a test request
curl http://localhost:11434/api/generate -d '{
  "model": "gemma:27b",
  "prompt": "Summarize the key points from this medical report...",
  "stream": false
}'`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Azure GPU Infrastructure with Terraform</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Now let's provision the Azure infrastructure to run our Kubernetes cluster with GPU nodes.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Terraform Configuration</h3>

          <div className="my-6">
            <SyntaxHighlighter language="hcl" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# main.tf
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  
  backend "azurerm" {
    resource_group_name  = "terraform-state-rg"
    storage_account_name = "tfstate"
    container_name       = "tfstate"
    key                  = "ai-automation.tfstate"
  }
}

provider "azurerm" {
  features {}
}

# Variables
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "eastus"
}

variable "cluster_name" {
  description = "AKS cluster name"
  type        = string
  default     = "ai-automation-aks"
}

variable "node_count" {
  description = "Initial number of GPU nodes"
  type        = number
  default     = 2
}

variable "max_node_count" {
  description = "Maximum number of GPU nodes for autoscaling"
  type        = number
  default     = 10
}

# Resource Group
resource "azurerm_resource_group" "main" {
  name     = "ai-automation-\${var.environment}-rg"
  location = var.location
  
  tags = {
    Environment = var.environment
    Project     = "AI-Automation"
    Compliance  = "HIPAA"
  }
}

# Virtual Network
resource "azurerm_virtual_network" "main" {
  name                = "ai-automation-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
}

resource "azurerm_subnet" "aks" {
  name                 = "aks-subnet"
  resource_group_name  = azurerm_resource_group.main.name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = ["10.0.1.0/24"]
}

# Log Analytics Workspace for monitoring
resource "azurerm_log_analytics_workspace" "main" {
  name                = "ai-automation-logs"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = 90  # HIPAA requires 90 days minimum
}

# AKS Cluster
resource "azurerm_kubernetes_cluster" "main" {
  name                = var.cluster_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  dns_prefix          = var.cluster_name
  kubernetes_version  = "1.28"
  
  # System node pool (non-GPU, for system workloads)
  default_node_pool {
    name                = "system"
    node_count          = 2
    vm_size             = "Standard_D4s_v3"
    vnet_subnet_id      = azurerm_subnet.aks.id
    type                = "VirtualMachineScaleSets"
    enable_auto_scaling = true
    min_count           = 2
    max_count           = 5
    
    node_labels = {
      "workload-type" = "system"
    }
    
    node_taints = [
      "CriticalAddonsOnly=true:NoSchedule"
    ]
  }
  
  identity {
    type = "SystemAssigned"
  }
  
  # Network profile
  network_profile {
    network_plugin     = "azure"
    network_policy     = "calico"
    load_balancer_sku  = "standard"
    service_cidr       = "10.1.0.0/16"
    dns_service_ip     = "10.1.0.10"
  }
  
  # Enable monitoring
  oms_agent {
    log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id
  }
  
  # HIPAA compliance features
  role_based_access_control_enabled = true
  
  azure_policy_enabled = true
  
  # Enable encryption at rest
  disk_encryption_set_id = azurerm_disk_encryption_set.main.id
  
  tags = {
    Environment = var.environment
    Compliance  = "HIPAA"
  }
}

# GPU Node Pool for AI workloads
resource "azurerm_kubernetes_cluster_node_pool" "gpu" {
  name                  = "gpupool"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.main.id
  vm_size               = "Standard_NC24ads_A100_v4"  # Azure VM with NVIDIA A100
  node_count            = var.node_count
  
  # Autoscaling
  enable_auto_scaling = true
  min_count           = var.node_count
  max_count           = var.max_node_count
  
  # GPU-specific labels and taints
  node_labels = {
    "workload-type" = "gpu"
    "gpu-type"      = "a100"
    "nvidia.com/gpu" = "true"
  }
  
  node_taints = [
    "nvidia.com/gpu=true:NoSchedule"
  ]
  
  # Use premium SSD for fast model loading
  os_disk_type = "Ephemeral"
  os_disk_size_gb = 200
  
  vnet_subnet_id = azurerm_subnet.aks.id
  
  tags = {
    Environment = var.environment
    GPU         = "A100"
  }
}

# Disk Encryption Set for HIPAA compliance
resource "azurerm_key_vault" "main" {
  name                = "ai-automation-kv"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  sku_name            = "premium"
  
  enabled_for_disk_encryption = true
  purge_protection_enabled    = true
  
  network_acls {
    default_action = "Deny"
    bypass         = "AzureServices"
  }
}

resource "azurerm_key_vault_key" "disk_encryption" {
  name         = "disk-encryption-key"
  key_vault_id = azurerm_key_vault.main.id
  key_type     = "RSA"
  key_size     = 4096
  
  key_opts = [
    "decrypt",
    "encrypt",
    "sign",
    "unwrapKey",
    "verify",
    "wrapKey",
  ]
}

resource "azurerm_disk_encryption_set" "main" {
  name                = "ai-automation-des"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  key_vault_key_id    = azurerm_key_vault_key.disk_encryption.id
  
  identity {
    type = "SystemAssigned"
  }
}

# Grant DES access to Key Vault
resource "azurerm_key_vault_access_policy" "disk_encryption" {
  key_vault_id = azurerm_key_vault.main.id
  tenant_id    = data.azurerm_client_config.current.tenant_id
  object_id    = azurerm_disk_encryption_set.main.identity[0].principal_id
  
  key_permissions = [
    "Get",
    "WrapKey",
    "UnwrapKey",
  ]
}

data "azurerm_client_config" "current" {}

# Container Registry for private images
resource "azurerm_container_registry" "main" {
  name                = "aiautomationacr"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = "Premium"
  admin_enabled       = false
  
  # HIPAA compliance
  public_network_access_enabled = false
  network_rule_bypass_option    = "AzureServices"
}

# Grant AKS access to ACR
resource "azurerm_role_assignment" "aks_acr_pull" {
  scope                = azurerm_container_registry.main.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.main.kubelet_identity[0].object_id
}

# Outputs
output "cluster_name" {
  value = azurerm_kubernetes_cluster.main.name
}

output "kube_config" {
  value     = azurerm_kubernetes_cluster.main.kube_config_raw
  sensitive = true
}

output "cluster_endpoint" {
  value = azurerm_kubernetes_cluster.main.kube_config[0].host
}

output "acr_login_server" {
  value = azurerm_container_registry.main.login_server
}`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Deploy Infrastructure</h3>

          <div className="my-6">
            <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# Initialize Terraform
terraform init

# Review planned changes
terraform plan -out=tfplan

# Apply infrastructure
terraform apply tfplan

# Get AKS credentials
az aks get-credentials \\
  --resource-group ai-automation-production-rg \\
  --name ai-automation-aks \\
  --overwrite-existing

# Verify GPU nodes
kubectl get nodes -l nvidia.com/gpu=true

# Install NVIDIA GPU Operator
kubectl apply -f https://raw.githubusercontent.com/NVIDIA/gpu-operator/main/deployments/gpu-operator/values.yaml

# Verify GPU is available
kubectl run gpu-test --rm -it --restart=Never \\
  --image=nvidia/cuda:12.0-base \\
  --limits=nvidia.com/gpu=1 \\
  -- nvidia-smi`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cost Analysis: GPU Cluster at Scale</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Understanding costs is critical for budgeting private AI infrastructure. Here's a detailed breakdown:
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Azure GPU VM Pricing (East US, as of Nov 2024)</h3>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">VM Size</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">GPU</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">VRAM</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Hourly</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Monthly (24/7)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">NC6s_v3</td>
                  <td className="px-4 py-4 text-sm text-slate-700">1x V100</td>
                  <td className="px-4 py-4 text-sm text-slate-700">16GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$3.06</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$2,203</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Dev/test, small models</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">NC12s_v3</td>
                  <td className="px-4 py-4 text-sm text-slate-700">2x V100</td>
                  <td className="px-4 py-4 text-sm text-slate-700">32GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$6.12</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$4,406</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Medium scale</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">NC24ads_A100_v4</td>
                  <td className="px-4 py-4 text-sm text-slate-700">1x A100</td>
                  <td className="px-4 py-4 text-sm text-slate-700">80GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$3.67</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$2,642</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Production (our choice)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">NC48ads_A100_v4</td>
                  <td className="px-4 py-4 text-sm text-slate-700">2x A100</td>
                  <td className="px-4 py-4 text-sm text-slate-700">160GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$7.35</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$5,292</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Large models, high throughput</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">NC96ads_A100_v4</td>
                  <td className="px-4 py-4 text-sm text-slate-700">4x A100</td>
                  <td className="px-4 py-4 text-sm text-slate-700">320GB</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$14.69</td>
                  <td className="px-4 py-4 text-sm text-slate-700">$10,577</td>
                  <td className="px-4 py-4 text-sm text-slate-700">Maximum performance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Complete Monthly Cost Scenarios</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Small Deployment (Startup/POC)</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>2x NC24ads_A100_v4 (GPU nodes)</span>
                  <span className="font-bold">$5,284/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>2x Standard_D4s_v3 (system nodes)</span>
                  <span className="font-bold">$290/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>100GB Premium SSD storage</span>
                  <span className="font-bold">$20/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Load Balancer</span>
                  <span className="font-bold">$25/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Log Analytics (90-day retention)</span>
                  <span className="font-bold">$150/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Network egress (estimated)</span>
                  <span className="font-bold">$50/mo</span>
                </div>
                <div className="border-t border-green-300 mt-3 pt-3 flex justify-between text-lg font-bold">
                  <span>Total Monthly Cost:</span>
                  <span className="text-green-700">$5,819/mo</span>
                </div>
                <div className="mt-2 text-sm">
                  <strong>Capacity:</strong> ~200-300 requests/hour with Gemma:27b
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Medium Deployment (Growing Business)</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>5x NC24ads_A100_v4 (GPU nodes)</span>
                  <span className="font-bold">$13,210/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>3x Standard_D4s_v3 (system nodes)</span>
                  <span className="font-bold">$435/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>500GB Premium SSD storage</span>
                  <span className="font-bold">$100/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Load Balancer (Standard)</span>
                  <span className="font-bold">$25/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Log Analytics (90-day retention, higher volume)</span>
                  <span className="font-bold">$400/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Network egress (estimated)</span>
                  <span className="font-bold">$200/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Private Link (for HIPAA)</span>
                  <span className="font-bold">$100/mo</span>
                </div>
                <div className="border-t border-blue-300 mt-3 pt-3 flex justify-between text-lg font-bold">
                  <span>Total Monthly Cost:</span>
                  <span className="text-blue-700">$14,470/mo</span>
                </div>
                <div className="mt-2 text-sm">
                  <strong>Capacity:</strong> ~500-750 requests/hour with Gemma:27b
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Large Deployment (Enterprise Scale)</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>10x NC24ads_A100_v4 (GPU nodes)</span>
                  <span className="font-bold">$26,420/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>5x Standard_D8s_v3 (system nodes)</span>
                  <span className="font-bold">$1,450/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>1TB Premium SSD storage</span>
                  <span className="font-bold">$200/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Load Balancer (Standard with WAF)</span>
                  <span className="font-bold">$250/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Log Analytics (90-day retention, enterprise volume)</span>
                  <span className="font-bold">$1,000/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Network egress (estimated)</span>
                  <span className="font-bold">$500/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Private Link + VPN Gateway</span>
                  <span className="font-bold">$300/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure Key Vault (premium)</span>
                  <span className="font-bold">$50/mo</span>
                </div>
                <div className="border-t border-purple-300 mt-3 pt-3 flex justify-between text-lg font-bold">
                  <span>Total Monthly Cost:</span>
                  <span className="text-purple-700">$30,170/mo</span>
                </div>
                <div className="mt-2 text-sm">
                  <strong>Capacity:</strong> ~1,000-1,500 requests/hour with Gemma:27b
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Cost Comparison: Self-Hosted vs API Services</h3>

          <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Break-Even Analysis</h4>
            <p className="text-slate-700 mb-4">
              Comparing our medium deployment ($14,470/mo) to GPT-4 API pricing ($0.03/1K tokens input, $0.06/1K tokens output):
            </p>
            
            <div className="space-y-3 text-slate-700">
              <div>
                <strong>Assumptions:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Average request: 500 input tokens, 500 output tokens</li>
                  <li>Cost per API request: $0.015 + $0.030 = $0.045</li>
                  <li>Our infrastructure: $14,470/mo for 500 req/hr capacity</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border border-slate-200 mt-4">
                <div className="font-bold text-lg mb-2">Break-Even Calculation:</div>
                <div>Monthly API requests needed: $14,470 / $0.045 = <strong>321,556 requests/month</strong></div>
                <div className="mt-2">Or approximately: <strong>446 requests/hour (24/7)</strong></div>
                <div className="mt-4 text-sm text-green-700 font-semibold">
                  ✓ Our infrastructure is cost-effective at 90% capacity utilization
                </div>
              </div>

              <div className="mt-6">
                <strong>Additional Self-Hosting Benefits Beyond Cost:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Data Privacy:</strong> No data leaves your infrastructure (required for HIPAA)</li>
                  <li><strong>No Rate Limits:</strong> Full control over throughput</li>
                  <li><strong>Customization:</strong> Fine-tune models on proprietary data</li>
                  <li><strong>Predictable Costs:</strong> No surprise bills from usage spikes</li>
                  <li><strong>Latency:</strong> Sub-100ms inference vs 500-2000ms API latency</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Cost Optimization Strategies</h3>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2">1. Use Reserved Instances</h4>
              <p className="text-slate-700">
                Azure Reserved Instances offer up to 72% savings. For our medium deployment, this reduces GPU costs from 
                $13,210/mo to approximately $3,699/mo — saving $9,511/mo.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2">2. Implement Spot Instances for Non-Critical Workloads</h4>
              <p className="text-slate-700">
                Use Spot instances for batch processing or development environments. Spot pricing offers up to 90% discount 
                but can be interrupted with 30-second notice.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2">3. Aggressive Autoscaling</h4>
              <p className="text-slate-700">
                Scale down to minimum replicas during off-peak hours. If your workload has 50% lower demand at night, 
                this saves ~25% on GPU costs.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2">4. Model Selection by Use Case</h4>
              <p className="text-slate-700">
                Route simple queries to Gemma:7b (2x cheaper to run) and complex ones to Gemma:27b. This can reduce 
                average costs by 30-40% while maintaining quality.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2">5. Quantization</h4>
              <p className="text-slate-700">
                Use 4-bit or 8-bit quantized models where accuracy requirements allow. This can reduce VRAM requirements 
                by 4x, allowing you to use smaller, cheaper VMs.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Example Workflow: Medical Report Processing</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Let's implement a complete example: processing medical reports with Gemma:27b for HIPAA-compliant automation.
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`import asyncio
import httpx
from typing import Dict, List
import json

class MedicalReportProcessor:
    """
    HIPAA-compliant medical report processor using private Ollama deployment.
    All data stays within your infrastructure.
    """
    
    def __init__(self, ollama_endpoint: str = "http://ollama-service.ai-automation.svc.cluster.local"):
        self.endpoint = ollama_endpoint
        self.model = "gemma:27b"
        self.client = httpx.AsyncClient(timeout=60.0)
    
    async def extract_structured_data(self, report_text: str) -> Dict:
        """
        Extract structured data from unstructured medical reports.
        """
        prompt = f"""Extract the following information from this medical report.
Return ONLY a valid JSON object with these exact fields:

{{
  "patient_demographics": {{
    "age": <number or null>,
    "gender": "<M/F/Other or null>"
  }},
  "chief_complaint": "<string or null>",
  "diagnosis": ["<diagnosis 1>", "<diagnosis 2>"],
  "medications": ["<med 1>", "<med 2>"],
  "procedures": ["<procedure 1>"],
  "lab_results": {{
    "<test_name>": "<value and unit>"
  }},
  "follow_up": "<string or null>"
}}

Medical Report:
{report_text}

JSON Output:"""

        response = await self.client.post(
            f"{self.endpoint}/api/generate",
            json={
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.1,  # Low temperature for factual extraction
                    "num_predict": 2000,
                }
            }
        )
        
        result = response.json()
        # Parse the JSON from model output
        try:
            extracted = json.loads(result["response"])
            return extracted
        except json.JSONDecodeError:
            # Fallback: extract JSON from text
            text = result["response"]
            start = text.find("{")
            end = text.rfind("}") + 1
            return json.loads(text[start:end])
    
    async def summarize_report(self, report_text: str, max_words: int = 200) -> str:
        """
        Generate concise clinical summary.
        """
        prompt = f"""Provide a concise clinical summary of this medical report in {max_words} words or less.
Focus on: diagnosis, key findings, treatment plan, and follow-up.

Medical Report:
{report_text}

Clinical Summary:"""

        response = await self.client.post(
            f"{self.endpoint}/api/generate",
            json={
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.3,
                    "num_predict": 300,
                }
            }
        )
        
        return response.json()["response"]
    
    async def classify_urgency(self, report_text: str) -> str:
        """
        Classify report urgency for triage.
        """
        prompt = f"""Classify the urgency of this medical report into one of these categories:
- CRITICAL: Life-threatening condition requiring immediate attention
- URGENT: Serious condition requiring prompt attention within hours
- ROUTINE: Standard follow-up or non-urgent matter

Respond with ONLY the category name (CRITICAL, URGENT, or ROUTINE).

Medical Report:
{report_text}

Urgency:"""

        response = await self.client.post(
            f"{self.endpoint}/api/generate",
            json={
                "model": self.model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.0,  # Deterministic for classification
                    "num_predict": 10,
                }
            }
        )
        
        urgency = response.json()["response"].strip().upper()
        # Validate output
        if urgency not in ["CRITICAL", "URGENT", "ROUTINE"]:
            return "ROUTINE"  # Default to routine if unclear
        return urgency
    
    async def process_report(self, report_text: str) -> Dict:
        """
        Full pipeline: extract data, summarize, and classify.
        """
        # Run all tasks concurrently for speed
        structured_data, summary, urgency = await asyncio.gather(
            self.extract_structured_data(report_text),
            self.summarize_report(report_text),
            self.classify_urgency(report_text)
        )
        
        return {
            "structured_data": structured_data,
            "summary": summary,
            "urgency": urgency,
            "processed_at": datetime.utcnow().isoformat()
        }
    
    async def batch_process(self, reports: List[str], max_concurrent: int = 5) -> List[Dict]:
        """
        Process multiple reports with concurrency control.
        """
        semaphore = asyncio.Semaphore(max_concurrent)
        
        async def process_with_semaphore(report):
            async with semaphore:
                return await self.process_report(report)
        
        tasks = [process_with_semaphore(report) for report in reports]
        return await asyncio.gather(*tasks)


# Example usage
async def main():
    processor = MedicalReportProcessor()
    
    sample_report = """
    Patient: John Doe, 58-year-old male
    Chief Complaint: Chest pain and shortness of breath
    
    History: Patient presents with substernal chest pain radiating to left arm, 
    onset 2 hours ago. Associated with diaphoresis and nausea.
    
    Exam: BP 160/95, HR 102, RR 22, SpO2 94% on room air
    Cardiovascular: Tachycardic, regular rhythm, no murmurs
    Respiratory: Bilateral crackles at bases
    
    EKG: ST elevations in leads II, III, aVF
    Troponin: 2.4 ng/mL (elevated)
    
    Assessment: Acute inferior wall myocardial infarction
    
    Plan: 
    - Aspirin 325mg PO given
    - Heparin bolus and drip initiated
    - Cardiology consulted for urgent catheterization
    - Transfer to CCU
    """
    
    result = await processor.process_report(sample_report)
    
    print("Urgency:", result["urgency"])
    print("\\nSummary:", result["summary"])
    print("\\nStructured Data:", json.dumps(result["structured_data"], indent=2))


if __name__ == "__main__":
    asyncio.run(main())`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Monitoring and Observability</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Production AI systems require comprehensive monitoring:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# prometheus-servicemonitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: ollama-metrics
  namespace: ai-automation
spec:
  selector:
    matchLabels:
      app: ollama
  endpoints:
  - port: http
    path: /metrics
    interval: 30s

---
# grafana-dashboard.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ollama-dashboard
  namespace: monitoring
data:
  dashboard.json: |
    {
      "dashboard": {
        "title": "AI Automation - Ollama Performance",
        "panels": [
          {
            "title": "Requests per Second",
            "targets": [
              {
                "expr": "rate(ollama_requests_total[5m])"
              }
            ]
          },
          {
            "title": "GPU Utilization",
            "targets": [
              {
                "expr": "nvidia_gpu_duty_cycle"
              }
            ]
          },
          {
            "title": "Average Response Time",
            "targets": [
              {
                "expr": "rate(ollama_request_duration_seconds_sum[5m]) / rate(ollama_requests_total[5m])"
              }
            ]
          },
          {
            "title": "Model Memory Usage",
            "targets": [
              {
                "expr": "ollama_model_memory_bytes"
              }
            ]
          }
        ]
      }
    }`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Security Best Practices</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            For HIPAA compliance and general security:
          </p>

          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>Encryption at rest:</strong> Use Azure Disk Encryption with customer-managed keys for all persistent storage
            </li>
            <li>
              <strong>Encryption in transit:</strong> TLS 1.3 for all network communications, including internal cluster traffic
            </li>
            <li>
              <strong>Network isolation:</strong> Deploy in private VNet, use Azure Private Link for external access
            </li>
            <li>
              <strong>Access control:</strong> Azure RBAC for cluster access, Kubernetes RBAC for workload permissions
            </li>
            <li>
              <strong>Audit logging:</strong> Enable Azure Monitor audit logs, retain for 90+ days for HIPAA compliance
            </li>
            <li>
              <strong>Vulnerability scanning:</strong> Use Azure Defender for containers, scan images before deployment
            </li>
            <li>
              <strong>Secrets management:</strong> Store credentials in Azure Key Vault, inject via CSI driver
            </li>
            <li>
              <strong>Network policies:</strong> Implement Calico policies to restrict pod-to-pod communication
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Conclusion</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Private AI automation with open-source models is not only feasible but often more cost-effective than API services 
            for high-volume applications. With proper infrastructure, organizations can achieve:
          </p>

          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2 mb-6">
            <li>Complete data sovereignty and HIPAA compliance</li>
            <li>Predictable, optimized costs at scale</li>
            <li>Lower latency and higher throughput</li>
            <li>Customization capabilities for domain-specific needs</li>
            <li>Independence from third-party API providers</li>
          </ul>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            At Subzero Research, we help organizations design, deploy, and optimize private AI infrastructure for healthcare, 
            finance, and government applications. Our expertise spans distributed systems, GPU optimization, and regulatory compliance.
          </p>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need Help with Your Private AI Infrastructure?</h3>
            <p className="text-slate-700 mb-4">
              We provide consulting services for architecture design, HIPAA compliance, and deployment of private AI systems.
            </p>
            <Link
              href="/#research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
